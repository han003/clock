import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimezoneSelectorDialogComponent} from "./timezone-selector-dialog/timezone-selector-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'clock-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private interval: number;
  time: String;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.time = moment().format('HH:mm:ss');
    }, 1000);

    console.log(`moment.tz.names()`, moment.tz.names());
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

  openTimezoneSelectDialog(): void {
    const dialogRef = this.dialog.open(TimezoneSelectorDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`result`, result);
    });
  }
}
