import {ServiceModel} from '../service/model/service.model';
import {ClientServiceList} from "../home/clientServiceList/client-service-list.model";

export interface ClientInterface {
  id: number;
  name: string;
  surname: string;
  clientServices?: ClientServiceList[];

  addClientsServices(service: ClientServiceList[]);

  addService(service: ClientServiceList);
}
