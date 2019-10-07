import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Chance} from "chance";
import {dateMinValidator} from "../shared/validators/date-min.validator";
import {dateMaxValidator} from "../shared/validators/date-max.validator";

interface Punch {
  id: number,
  in: string,
  out: string,
  time: string,
  date: string
}

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
  punches: Punch[];
  chance: Chance;

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

    this.chance = new Chance(this.user);
    this.name = this.chance.name();

    let date = moment();
    this.punches = [];
    for (let i = 0; i < 10; i++) {
      this.punches.push(this.getFakePunch(date, i === 0));
      date.subtract(1, 'd');
    }
  }

  getFakePunch(date: moment.Moment, noOut: boolean): Punch {
    date = date.startOf('d');

    let middle = 12 * 3600;
    let outS = this.chance.integer({min: middle + 1, max: middle * 2});
    let inS = this.chance.integer({min: 0, max: middle - 1});

    let punchOut = noOut ? null : date.clone().add(outS, 's');
    let punchIn = date.clone().add(inS, 's');
    let diffVar = punchOut ? punchOut : moment();

    return {
      id: Math.round(date.unix() / 5337),
      date: date.format('ll'),
      in: punchIn.format('lll'),
      out: punchOut ? punchOut.format('lll') : null,
      time: (diffVar.diff(punchIn, 's') / 3600).toFixed(2)
    }
  }
}
