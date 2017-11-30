import {Component, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Params, Router} from '@angular/router';
import {ServiceModel} from '../../service/model/service.model';
import {ServiceDataService} from '../../service/service-data.service';
import {ClientServiceDataService} from '../client-service-data.service';
import {ClientServiceList} from '../../home/clientServiceList/client-service-list.model';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-client-service-component',
  templateUrl: './client-service-component.component.html',
  styleUrls: ['./client-service-component.component.css']
})
export class ClientServiceComponentComponent implements OnInit, OnDestroy {
  id: number;
  services: ServiceModel[];
  clientServices: ClientServiceList[];
  w: ServiceModel;
  activeTab: ServiceModel[] = [];
  descritionList: string[];


  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private serviceData: ServiceDataService,
              private clientData: ClientServiceDataService
  ) {
    this.onRouterLinkChange();
    this.descritionList = [];
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.services = this.serviceData.getServices();
    this.clientServices = this.clientData.getServicesByClient(this.id);
  }

  activeService(i: ServiceModel) {

    if (!this.activeTab.includes(i)) {
      this.activeTab.push(i);
    }else {
     const id =  this.activeTab.indexOf(i);
      this.activeTab.splice(id, 1);
    }

  }

  isActive(i: ServiceModel) {

    return this.activeTab.includes(i);
  }

  private clearActiveTab() {
    this.activeTab = [];
  }
  private onIDValuechange() {
    this.activeRouter.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }

  onRouterLinkChange() {
   this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onIDValuechange();
        this.clearActiveTab();
      }
    });
  }

  onSaveService() {
    if (this.activeTab.length > 0) {
      const s: ClientServiceList[] = [];
      for (let i = 0; i < this.activeTab.length; i++) {
        s.push(new ClientServiceList( new Date().toISOString().substring(0, 10), this.activeTab[i].name, this.descritionList[i]));

      }
      this.clientData.addServices(this.id, s);
      this.clearActiveTab();
    }else {
      this.w = null;
    }
  }

  ngOnDestroy() {
    this.services = [];
    this.activeTab = [];
    this.clientServices = [];
  }



}
