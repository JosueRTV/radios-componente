import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RadiosComponent } from './formularios/radios/radios.component';
import { PadreComponent } from './formularios/padre/padre.component';
import { HijoComponent } from './formularios/hijo/hijo.component';

import { InputControlModule } from './input-control/input-control.module'

@NgModule({
  declarations: [
    AppComponent,
    RadiosComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
