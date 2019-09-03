import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MatCardModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UserDataComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
