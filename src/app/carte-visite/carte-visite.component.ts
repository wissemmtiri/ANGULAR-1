import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  name: string = '';
  firstname: string = '';
  image: string = '';
  job: string = '';
  jobDescription: string = '';
  jobKeywords: string = '';
  quote: string = '';
}