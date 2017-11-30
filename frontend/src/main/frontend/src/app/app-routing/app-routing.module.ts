import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {ClientDetailComponent} from '../clients/client-detail/client-detail.component';
import {HomeComponent} from '../home/home.component';
import {ServiceComponent} from '../service/service/service.component';
import {ServiceDetailComponent} from '../service/service-detail/service-detail.component';
import {ClientsComponent} from "../clients/clients/clients.component";
import {ClientServiceComponentComponent} from '../clients/client-detail/client-service-component.component'

const appRoute: Routes =[
  {path: '', component: HomeComponent},
  {path: 'klienci', component: ClientsComponent, children:[
    {path: 'dodaj', component: ClientDetailComponent},
    {path: ':id', component: ClientDetailComponent},
    {path: ':id/usluga', component: ClientServiceComponentComponent}
  ]},
  {path: 'uslugi', component: ServiceComponent, children:[
    { path: 'dodaj', component: ServiceDetailComponent},
    { path: ':id', component: ServiceDetailComponent}

  ]}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
