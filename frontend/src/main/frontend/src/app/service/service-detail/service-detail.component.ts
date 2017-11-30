import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ServiceDataService} from "../service-data.service";
import {ServiceModel} from "../model/service.model";
import {IdGeneratorService} from "../../home/id-generator.service";

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  id: number;
  editMode = false;
  serviceForm: FormGroup

  constructor(private routerActive: ActivatedRoute,
              private router: Router,
              private serviceData: ServiceDataService,
              private idGenerator: IdGeneratorService

  ) { }

  ngOnInit() {
      this.routerActive.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        });
  }

  onSubmit() {
    if (this.editMode){
      const serviceID = this.serviceData.getService(this.id).id;
      const service = new ServiceModel(serviceID, this.serviceForm.value['name'],
        this.serviceForm.value['description']);
      this.serviceData.updateService(this.id, service);
    }else {
      const serviceID = 0;
      const service = new ServiceModel(serviceID, this.serviceForm.value['name'],
        this.serviceForm.value['description']);
      this.serviceData.addService(service);
    }
    this.clear();
  }

  onDelete() {
    if (this.id >= 0) {
      console.log('Usuwanie usługi o id: ' + this.id);
      this.serviceData.deleteService(this.id);
      this.clear();
    }

  }

  onCancel() {
    this.clear();
  }

  private clear() {
    const p = this.routerActive.parent.url['_value']['0']['path'];
    this.router.navigate([p + '/dodaj']);
    this.serviceForm.reset();
  }



  private initForm() {

    let name = '';
    let description = '';

    if(this.editMode) {
      const service = this.serviceData.getService(this.id);
      name = service.name;
      description = service.description;
    }

    this.serviceForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required)
    });
  }
}
