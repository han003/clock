import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function dateMinValidator(min: moment.Moment): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let m: moment.Moment = control.value;
    let beforeMin: boolean = !(moment.isMoment(m) && m.isSameOrAfter(min, 'd'));

    return beforeMin ? {'minDate': {value: m}} : null;
  }
}
