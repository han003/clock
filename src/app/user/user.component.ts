import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'clock-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.user = parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(`this.user`, this.user);
  }
}
