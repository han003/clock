import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimezoneSelectorDialogComponent} from "./timezone-selector-dialog/timezone-selector-dialog.component";
import {MatDialog} from "@angular/material/dialog";

export interface Zone {
  key: string,
  name: string
}

@Component({
  selector: 'clock-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private interval: number;
  private zoneGuess: string = moment.tz.guess(true);
  private storedZone: Zone = JSON.parse(localStorage.getItem('timezone'));

  time: string;
  zones: Zone[];
  selectedZone: Zone;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);

    this.zones = moment.tz.names().map((n, i) => {
      return {
        key: n,
        name: this.formatZoneName(n)
      }
    });

    this.getZone();
    this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

  getZone() {
    this.selectedZone = this.storedZone || {
      name: this.formatZoneName(this.zoneGuess),
      key: this.zoneGuess
    };
  }

  formatZoneName(name: string): string {
    return name.split('_').join(' ');
  }

  updateTime() {
    const format = 'ddd HH:mm:ss';

    if (this.selectedZone) {
      try {
        this.time = moment().tz(this.selectedZone.key).format(format);
      } catch (e) {
        this.storedZone = null;
        this.getZone();
      }
    } else {
      this.time = moment().format(format);
    }
  }

  openTimezoneSelectDialog(): void {
    const dialogRef = this.dialog.open(TimezoneSelectorDialogComponent, {
      data: {
        zones: this.zones,
        selectedZone: this.selectedZone
      }
    });

    dialogRef.afterClosed().subscribe((zone: Zone) => {
      if (zone) {
        this.selectedZone = zone;
        localStorage.setItem('timezone', JSON.stringify(zone));
      }
    });
  }
}
