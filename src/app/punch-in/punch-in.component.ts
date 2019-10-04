import {Component, OnInit} from '@angular/core';

interface Tile {
  text: string;
  func: Function;
  class?: string;
}

@Component({
  selector: 'clock-punch-in',
  templateUrl: './punch-in.component.html',
  styleUrls: ['./punch-in.component.scss']
})
export class PunchInComponent implements OnInit {
  public tiles: Tile[];
  public numbers: Number[];
  public number: Number;

  constructor() {
  }

  ngOnInit() {
    this.numbers = [];
    this.tiles = [
      {text: '1', func: this.addNumber.bind(this)},
      {text: '2', func: this.addNumber.bind(this)},
      {text: '3', func: this.addNumber.bind(this)},
      {text: '4', func: this.addNumber.bind(this)},
      {text: '5', func: this.addNumber.bind(this)},
      {text: '6', func: this.addNumber.bind(this)},
      {text: '7', func: this.addNumber.bind(this)},
      {text: '8', func: this.addNumber.bind(this)},
      {text: '9', func: this.addNumber.bind(this)},
      {text: 'Clear', class: 'clear', func: this.clear.bind(this)},
      {text: '0', func: this.addNumber.bind(this)},
      {text: 'Submit', class: 'submit', func: this.submit.bind(this)},
    ];

    this.setNumber();
  }

  addNumber(tile: Tile) {
    this.numbers.push(parseInt(tile.text));
    this.setNumber();
  }

  clear() {
    this.numbers = [];
    this.setNumber();
  }

  setNumber() {
    this.number = parseInt(this.numbers.join(''));
  }

  submit() {
    if (this.number) {
      console.log(`submitting`, this.number);
    }
  }
}
