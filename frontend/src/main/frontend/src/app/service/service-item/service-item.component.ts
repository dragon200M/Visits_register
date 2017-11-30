import {Component, Input, OnInit} from '@angular/core';
import {ServiceModel} from "../model/service.model";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() service: ServiceModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
