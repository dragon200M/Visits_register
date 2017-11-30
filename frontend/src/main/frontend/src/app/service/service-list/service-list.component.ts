import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ServiceModel} from "../model/service.model";
import {ServiceDataService} from "../service-data.service"
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: ServiceModel[];
  subscription: Subscription;

  constructor(private serviceData: ServiceDataService, private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    setTimeout(() => {
    this.subscription = this.serviceData.serviceChanged.subscribe(
      (services: ServiceModel[]) => {
        this.services = services;
      });
    this.services = this.serviceData.getServices(); }, 100);

  }

  onNewService() {
    this.router.navigate(['dodaj'],{relativeTo: this.route});
  }

}
