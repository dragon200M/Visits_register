import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Client} from './model/client.model';
import {Subject} from 'rxjs/Subject';
import {ServiceModel} from '../service/model/service.model';
import {ClientServiceList} from '../home/clientServiceList/client-service-list.model';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ClientServiceDataService {
  clientsChanges = new Subject<Client[]>();
  private clientUrl = '/client/all';
  private getClientByIdUrl = '/client/all';
  private addClientURL = '/client/new';
  private addServicesUrl = '/client/';
  private updateClientURL = '/client/';
  private deleteClientURL = '/client/delete/';

  private clients: Client[] = [];

  headers = new Headers({
    'Content-Type': 'application/json'
  });




  constructor(private http: Http) {
    this.http.get(this.clientUrl)
      .subscribe((res: Response) => {
        const a = JSON.parse(res.text());
        this.clients = this.clients.concat(this.parseToClients(a));
      });
    this.clientsChanges.next(this.clients.slice());
  }


  getAllClient() {
    this.http.get(this.clientUrl)
      .subscribe((res: Response) => {
        const a = JSON.parse(res.text());
        this.clients = this.clients.concat(this.parseToClients(a));
      });
    this.clientsChanges.next(this.clients.slice());
  }

  getClients() {
    return this.clients.slice();
  }
  getClient(id: number) {
    return this.clients[id - 1];
  }

  getServicesByClient(id: number) {
    return this.clients[id -1].clientServices;
  }
  addServiceToClient(idClient: number, service: ClientServiceList) {
    this.clients[idClient].clientServices.push(service);
    this.clientsChanges.next(this.clients.slice());
  }

  addServices(idClient: number, service: ClientServiceList[]) {
    const identifier = this.clients[idClient - 1].id;

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});
    return this.http.post(this.addServicesUrl + identifier + '/addServices', JSON.stringify(service), options)
      .subscribe( (data: Response) => {
        if (data.status == 201) {
          setTimeout(() => {
            for (const c of service ){
              this.clients[idClient - 1].clientServices.push(c);
            }
            this.clientsChanges.next(this.clients.slice());

          }, 200);

        } });

  }


  updateClient(index: number, newClient: Client) {
    const identifier = this.clients[index - 1].id;
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});


    return this.http.post(this.updateClientURL + identifier + '/update', JSON.stringify(newClient), options)
      .subscribe( (data: Response) => {
        if (data.status === 201) {
          setTimeout(() => {
            this.clients[index - 1] = newClient;
            this.clientsChanges.next(this.clients.slice());  }, 200);
        }else if (data.status === 304) {
          console.log('Nie zmodyfikowano klienta');
        } });
  }

  addClient(client: Client) {

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});

    return this.http.post(this.addClientURL, JSON.stringify(client), options)
      .subscribe( (data: Response) => {
        if (data.status === 201) {
          setTimeout(() => {
            const a: number = JSON.parse(data.text())['id'];
            client.id = a;
            console.log(a);
            this.clients.push(client);
            this.clientsChanges.next(this.clients.slice()); }, 200);

        } });
  }

  deleteClient(index: number) {
    const identifier = this.clients[index - 1].id;
    this.http.delete(this.deleteClientURL + identifier)
      .subscribe((data: Response) => {
          if (data.status === 200) {
            setTimeout( () => {
              this.clients.splice(index - 1, 1);
              this.clientsChanges.next(this.clients.slice());
            }, 200);
          } else if (data.status === 404 ) {
            console.log('Nie znaleziono');
          } else {
            console.log('Coś poszło nie tak');
          };
      });
  }

  private parseToClients(data: any) {
    const clientArray: Client[] = [];
    for (const c of data) {
      clientArray.splice(c['id'], 0, this.parseToClient(c));
    }
    return clientArray;
  }

  private parseToClient(c: any) {
      const cli = new Client(c['id'], c['name'], c['surname']);
      const servicesList: ClientServiceList[] = [];
        for (const d of c['services']) {
          const a: ClientServiceList = new ClientServiceList(new Date().toISOString().substring(0, 10), d['service'], d['desc']);
          cli.addService(a);
        }
    return cli;
  }


}
