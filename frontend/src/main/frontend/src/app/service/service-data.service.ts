import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {ServiceModel} from "./model/service.model";
import {Http, RequestOptions, Response,Headers} from "@angular/http";

@Injectable()
export class ServiceDataService {
  serviceChanged = new Subject<ServiceModel[]>();
  private servicesUrl = '/services/all';
  private addServiceURL = '/services/new';
  private updateServiceURL = '/services/';
  private deleteServiceURL = '/services/delete/';

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  private services: ServiceModel[] = [];

  constructor(private http: Http) {
    this.http.get(this.servicesUrl)
      .subscribe(
        (res: Response) => {
          const services2: ServiceModel[] = res.json();
          this.services = services2;
        }
      );
    this.serviceChanged.next(this.services.slice());
  }


  getServices() {
    return this.services.slice();
  }

  getService(id: number) {
    return  this.services[id - 1];
  }

  updateService(id: number, service: ServiceModel) {
    const identifier = this.services[id - 1].id;
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});

    return this.http.post(this.updateServiceURL+identifier+'/update'
      ,JSON.stringify(service),options)
      .subscribe((data: Response) => {
      if(data.status === 201) {
        setTimeout(() => {
          this.services[id - 1] = service;
          this.serviceChanged.next(this.services.slice());
        }, 200);
      }else if (data.status === 304) {
        console.log('Nie zmodyfikowano klienta');
      }});


  }

  addService(service: ServiceModel) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});

    return this.http.post(this.addServiceURL, JSON.stringify(service), options)
      .subscribe( (data: Response) => {
        const a: number = JSON.parse(data.text())['id'];
        if (data.status == 201) {
          setTimeout( () => {
            const a: number = JSON.parse(data.text())['id'];
            service.id =a;
            this.services.push(service);
            this.serviceChanged.next(this.services.slice()); }, 200);
        }
      });
  }

  deleteService(id: number) {
    const identifier = this.services[id -1].id;
    this.http.delete(this.deleteServiceURL+identifier)
      .subscribe((data: Response) =>{
        if (data.status === 200) {
          setTimeout( () => {
            this.services.splice(id -1,1);
            this.serviceChanged.next(this.services.slice());
          }, 200);
        }else if  (data.status === 404) {
          console.log('Nie znaleziono');
        }else {
          console.log('Coś poszło nie tak');
        };
      });

  }
}
