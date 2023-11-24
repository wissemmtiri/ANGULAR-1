import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input() PereColor: string = '';
  myFavoriteColor: string = 'lightblue';

  @Output() colorChange = new EventEmitter()

  sendFavColor() {
    this.colorChange.emit(this.myFavoriteColor);
  }

  color() {
    console.log(this.PereColor);
  }
}