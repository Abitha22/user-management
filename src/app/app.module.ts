import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MatCardModule , MatSelectModule , MatOptionModule , MatFormFieldModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from '../../node_modules/@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UserDataComponent,
    UserDetailsComponent,
    SearchInputComponent,
    DropdownComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
