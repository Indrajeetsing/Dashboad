// import './polyfills';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilterRuleOptionPipe } from './filter-rule-option.pipe';

@NgModule({
  imports:      [ BrowserAnimationsModule, BrowserModule, HttpClientModule, MatTableModule, MatAutocompleteModule, FormsModule, MatInputModule, MatFormFieldModule,ReactiveFormsModule ],
  declarations: [ AppComponent, FilterRuleOptionPipe, HelloComponent],
  bootstrap:    [ AppComponent ],
  exports: [FilterRuleOptionPipe]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
