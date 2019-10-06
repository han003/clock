import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";
import {Chance} from "chance";

@Component({
  selector: 'clock-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: number;
  imgSrc: string;
  date: moment.Moment;
  minDate: moment.Moment;
  maxDate: moment.Moment;
  name: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.minDate = moment().subtract(1, 'd');
    this.maxDate = moment().add(1, 'd');
    this.date = new FormControl(moment());
  }

  ngOnInit() {
    const avatarSize = 60;
    this.user = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgSrc = `https://api.adorable.io/avatars/${avatarSize}/${this.user}@example.com.png`;

    const chance = new Chance(this.user);
    this.name = chance.name();
  }
}
