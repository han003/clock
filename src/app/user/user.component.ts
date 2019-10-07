import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Chance} from "chance";
import {dateMinValidator} from "../shared/validators/date-min.validator";
import {dateMaxValidator} from "../shared/validators/date-max.validator";

@Component({
  selector: 'clock-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: number;
  imgSrc: string;
  minDate: moment.Moment;
  maxDate: moment.Moment;
  name: string;
  punchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.minDate = moment().subtract(1, 'd');
    this.maxDate = moment().add(1, 'd');
  }

  ngOnInit() {
    this.punchForm = this.formBuilder.group({
      businessDate: new FormControl(moment(), [
        Validators.required,
        dateMinValidator(this.minDate),
        dateMaxValidator(this.maxDate)
      ]),
      comment: new FormControl(null)
    });

    const avatarSize = 60;
    this.user = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgSrc = `https://api.adorable.io/avatars/${avatarSize}/${this.user}@example.com.png`;

    const chance = new Chance(this.user);
    this.name = chance.name();
  }
}
