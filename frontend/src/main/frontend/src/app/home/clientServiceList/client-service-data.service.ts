import { Injectable } from '@angular/core';
import {ClientServiceList} from "./client-service-list.model";
import {ClientServiceDataService} from "../../clients/client-service-data.service";
import {ServiceDataService} from "../../service/service-data.service";

@Injectable()
export class ClientServiceListService {



  constructor(private clients: ClientServiceDataService, private services: ServiceDataService) { }

}
