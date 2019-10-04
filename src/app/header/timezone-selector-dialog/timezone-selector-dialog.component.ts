import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Zone} from "../header.component";

@Component({
  selector: 'clock-timezone-selector-dialog',
  templateUrl: './timezone-selector-dialog.component.html',
  styleUrls: ['./timezone-selector-dialog.component.scss']
})
export class TimezoneSelectorDialogComponent implements OnInit {
  zones: Zone[];
  myControl = new FormControl();
  filteredZones: Observable<Zone[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TimezoneSelectorDialogComponent>
  ) {
    this.zones = data.zones;
    this.myControl.setValue(data.selectedZone);
  }

  ngOnInit() {
    this.filteredZones = this.myControl.valueChanges.pipe(
      map(value => typeof value === 'string' ? value : value.name),
      map(value => this._filter(value)
      )
    );
  }

  private _filter(value: string): Zone[] {
    const filterValue = value.toLowerCase();
    return this.zones.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(zone?: Zone): string | undefined {
    return zone ? zone.name : undefined;
  }

  onUpdate() {
    this.dialogRef.close(this.myControl.value);
  }
}
