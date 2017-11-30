import { Component, OnInit } from '@angular/core';
import {ClientServiceDataService} from '../clients/client-service-data.service';
import {Client} from '../clients/model/client.model';
import {ServiceModel} from '../service/model/service.model';
import {ServiceDataService} from '../service/service-data.service';
import {ClientServiceList} from './clientServiceList/client-service-list.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clients: Client[];
  clientsChanges = new Subject<Client[]>();
  clientsServices: ClientServiceList[];
  subscription: Subscription;

  constructor(private clientData: ClientServiceDataService,
              private serviceData: ServiceDataService,
              private activeRouter: ActivatedRoute,
              private router: Router,
  ) {
    this.clients = this.clientData.getClients();
  }

  ngOnInit() {
    setTimeout(() => {
      this.subscription = this.clientData.clientsChanges
        .subscribe(
          (clients: Client[]) => {
            this.clients = this.clientData.getClients();
          }
        );
    this.clients = this.clientData.getClients(); }, 800);
  }

  getAllClients(id: number) {
   this.clientsServices = this.clientData.getServicesByClient(id);
  }

  goToClient() {
    const p = this.activeRouter.parent.url['_value']['0']['path'];
    this.router.navigate([p + '/klienci']);
  }
}

