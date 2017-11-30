import { Injectable } from '@angular/core';
import {ClientServiceDataService} from '../clients/client-service-data.service';
import {ServiceDataService} from '../service/service-data.service';

@Injectable()
export class IdGeneratorService {
  clientIds: number;
  serviceId: number;
  id:number;
  constructor(private clientsID: ClientServiceDataService,
              private serviceID: ServiceDataService

  ) {

  //   if (this.clientsID.getClients() === null) {
  //     this.id = this.clientsID.getClients()[this.clientsID.getClients().length - 1].id;
  //   }
  //   else {
  //    this.id = 1;
  //   }
  //   this.clientIds = this.id;
  //
  //   // const id2 =  this.serviceID.getServices()[this.serviceID.getServices().length - 1].id;
  //   // this.serviceId = id2;
  // }
  // getClientId() {
  //   this.clientIds += 1;
  //   return this.clientIds;
  // }
  //
  // getServiceId() {
  //   this.serviceId += 1;
  //   return this.serviceId;
  // }
}}
