import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client.model";
import {ClientServiceDataService} from "../client-service-data.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[];
  subscription: Subscription;

  constructor(private clientService: ClientServiceDataService,
              private router: Router,
              private route: ActivatedRoute
            ) { }

  ngOnInit() {
    setTimeout(() => {
    this.subscription = this.clientService.clientsChanges.subscribe(
      (clients: Client[]) => {
        this.clients = clients;
      }
    )
    this.clients = this.clientService.getClients();}, 100 );

  }

  onNewClient() {
    this.router.navigate(['dodaj'], {relativeTo: this.route});
  }



}
