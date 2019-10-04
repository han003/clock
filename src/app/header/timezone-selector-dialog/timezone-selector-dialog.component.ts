import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Zone {
  key: string,
  name: string
}

@Component({
  selector: 'clock-timezone-selector-dialog',
  templateUrl: './timezone-selector-dialog.component.html',
  styleUrls: ['./timezone-selector-dialog.component.scss']
})
export class TimezoneSelectorDialogComponent implements OnInit {
  options: Zone[];
  myControl = new FormControl();
  filteredOptions: Observable<Zone[]>;

  constructor(public dialogRef: MatDialogRef<TimezoneSelectorDialogComponent>) {
  }

  ngOnInit() {
    this.options = moment.tz.names().map((n, i) => {
      return {
        index: i,
        name: n.replace('_', ' ')
      }
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      map(value => typeof value === 'string' ? value : value.name),
      map(value => this._filter(value)
      )
    );
  }

  private _filter(value: string): Zone[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(zone?: Zone): string | undefined {
    return zone ? zone.name : undefined;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onUpdate() {
    this.dialogRef.close(this.myControl.value);
  }
}
