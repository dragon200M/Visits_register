
import {ClientInterface} from '../client-interface';
import {ServiceModel} from '../../service/model/service.model';
import {ClientServiceList} from '../../home/clientServiceList/client-service-list.model';


export class Client implements ClientInterface {


  public id: number;
  public name: string;
  public surname: string;
  public clientServices: ClientServiceList[] ;

  constructor(id: number, name: string, surname: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.clientServices = [];
  }



  addClientsServices(service: ClientServiceList[]) {
    this.clientServices = service;
  }

  addService(service: ClientServiceList) {
    this.clientServices.push(service);
  }


}
