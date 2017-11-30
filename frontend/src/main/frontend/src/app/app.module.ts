import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ClientsComponent } from './clients/clients/clients.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { HomeComponent } from './home/home.component';


import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientItemComponent } from './clients/client-item/client-item.component';
import {ClientServiceDataService} from "./clients/client-service-data.service";
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { ServiceItemComponent } from './service/service-item/service-item.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import {ServiceComponent} from "./service/service/service.component";
import {ServiceDataService} from "./service/service-data.service";
import { ShortPipePipe } from './short-pipe.pipe';
import { ClientServiceComponentComponent } from './clients/client-detail/client-service-component.component';
import {IdGeneratorService} from "./home/id-generator.service";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    HomeComponent,
    ServiceComponent,
    ClientListComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ServiceDetailComponent,
    ServiceItemComponent,
    ServiceListComponent,
    ShortPipePipe,
    ClientServiceComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClientServiceDataService, ServiceDataService, IdGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
