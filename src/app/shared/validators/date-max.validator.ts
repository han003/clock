import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function dateMaxValidator(max: moment.Moment): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let m: moment.Moment = control.value;
    let afterMax: boolean = !(moment.isMoment(m) && m.isSameOrBefore(max, 'd'));

    return afterMax ? {'maxDate': {value: m}} : null;
  }
}
