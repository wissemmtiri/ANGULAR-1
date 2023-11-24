import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Wissem MTIRI";
  age: number = 23;

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
