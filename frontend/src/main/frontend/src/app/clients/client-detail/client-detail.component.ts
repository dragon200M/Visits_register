import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientServiceDataService} from "../client-service-data.service";
import {Client} from "../model/client.model";
import {Router, Params, ActivatedRoute} from "@angular/router";
import {consoleTestResultHandler} from "tslint/lib/test";
import {isNumber} from "util";
import {IdGeneratorService} from "../../home/id-generator.service";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  id: number;
  editMode = false;
  clientForm: FormGroup;

  constructor(private clientService: ClientServiceDataService,
              private router: ActivatedRoute,
              private rout: Router,
              private idGenerator: IdGeneratorService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();

      }
    );


  }

  onSubmit() {
    if (this.editMode) {
      const  clientID = this.clientService.getClient(this.id).id;
      const client = new Client(clientID,
        this.clientForm.value['name'], this.clientForm.value['surname']
      );
      this.clientService.updateClient(this.id, client);
    } else {
      const  clientID = 0
      const client = new Client(clientID,
        this.clientForm.value['name'], this.clientForm.value['surname']
      );
      this.clientService.addClient(client);
    }
    this.clear();

  }

  onCancel() {
    this.clear();
  }

  onDelete() {

    if (this.id >= 0) {
      //console.log('Usuwanie klienta o id: ' + this.clientService.getClient(this.id).id);
      this.clientService.deleteClient(this.id);
      this.clear();
    }

  }

  private clear() {
    const p = this.router.parent.url['_value']['0']['path'];
    this.rout.navigate([p + '/dodaj']);
    this.clientForm.reset();

  }

  private initForm(){
    let name = '';
    let surname = '';



    if (this.editMode) {
      const client = this.clientService.getClient(this.id);
      name = client.name;
      surname = client.surname;
    }



    this.clientForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'surname': new FormControl(surname, Validators.required)
    });
  }


}
