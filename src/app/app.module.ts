import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DivColorComponent } from './div-color/div-color.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DivColorComponent,
    CarteVisiteComponent,
    PereComponent,
    FilsComponent,
    MiniWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
