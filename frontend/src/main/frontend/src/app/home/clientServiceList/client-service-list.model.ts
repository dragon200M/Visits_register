

import {ServiceModel} from '../../service/model/service.model';

export class ClientServiceList {
  public id: number;
  public service: string;
  public date: string;
  public desc: string;

  private reverseDate(date: string) {
    return date.split('-').reverse().join('-');
  }

  constructor(date: string, service: string, desc: string) {
    this.date = this.reverseDate(date);
    this.service = service;
    this.desc = desc;
  }


}
