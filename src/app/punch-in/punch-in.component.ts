import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clock-punch-in',
  templateUrl: './punch-in.component.html',
  styleUrls: ['./punch-in.component.scss']
})
export class PunchInComponent implements OnInit {
  public tiles: Object[];
  public numbers: any[];
  public number: String;

  constructor() {
  }

  ngOnInit() {
    this.numbers = [];
    this.tiles = [
      {text: 1, func: this.addNumber.bind(this)},
      {text: 2, func: this.addNumber.bind(this)},
      {text: 3, func: this.addNumber.bind(this)},
      {text: 4, func: this.addNumber.bind(this)},
      {text: 5, func: this.addNumber.bind(this)},
      {text: 6, func: this.addNumber.bind(this)},
      {text: 7, func: this.addNumber.bind(this)},
      {text: 8, func: this.addNumber.bind(this)},
      {text: 9, func: this.addNumber.bind(this)},
      {text: 'Clear', class: 'clear', func: this.clear.bind(this)},
      {text: 0, func: this.addNumber.bind(this)},
      {text: 'Submit', class: 'submit'},
    ];

    this.setNumber();
  }

  addNumber(tile) {
    this.numbers.push(tile.text);
    this.setNumber();
  }

  clear() {
    this.numbers = [];
    this.setNumber();
  }

  setNumber() {
    this.number = this.numbers.join('');
  }
}
