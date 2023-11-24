import { Component } from '@angular/core';

@Component({
  selector: 'app-div-color',
  templateUrl: './div-color.component.html',
  styleUrls: ['./div-color.component.css']
})
export class DivColorComponent {
  bgcolor: string = '';
  colorInput: string = '';

  changeColor() {
    this.bgcolor = this.colorInput;
  }

  resetColor() {
    this.bgcolor = '';
  }
}