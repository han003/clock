import {Component, OnInit} from '@angular/core';
import {Tile} from "./tile";

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
      new Tile('1', this.addNumber, this),
      new Tile('2', this.addNumber, this),
      new Tile('3', this.addNumber, this),
      new Tile('4', this.addNumber, this),
      new Tile('5', this.addNumber, this),
      new Tile('6', this.addNumber, this),
      new Tile('7', this.addNumber, this),
      new Tile('8', this.addNumber, this),
      new Tile('9', this.addNumber, this),
      new Tile('Clear', this.clear, this, 'clear'),
      new Tile('0', this.addNumber, this),
      new Tile('Submit', this.submit, this, 'submit'),
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
