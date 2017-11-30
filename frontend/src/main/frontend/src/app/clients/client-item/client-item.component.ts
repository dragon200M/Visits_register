import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../model/client.model';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {
  @Input() client: Client;
  @Input() index: number;
  id: number;

  constructor(private router: ActivatedRoute,
                            private rout: Router) { }

  ngOnInit() {
    this.router.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

  }

  onAddService(id: number) {
   // this.rout.navigate(['usluga'], {relativeTo: this.router});
   this.rout.navigate([id, 'usluga'], {relativeTo: this.router});

  }

}
