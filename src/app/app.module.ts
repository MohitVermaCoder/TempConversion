import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TempConvertComponent } from './temp-convert/temp-convert.component';

@NgModule({
  declarations: [
    AppComponent,
    TempConvertComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [TempConvertComponent]
})
export class AppModule { }
