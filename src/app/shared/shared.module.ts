import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dateMinValidator } from './validators/date-min.validator';



@NgModule({
  schemas: [dateMinValidator],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
