import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent {
  bgColor: string = "blue";

  intercept(value: string) {
    console.log(value);
    this.bgColor = value;
  }
}