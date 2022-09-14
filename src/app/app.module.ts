import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsComponent } from './forms/forms.component';
import { PhoneDirective } from './directives/phone.directive';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from "@angular/common/http";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangecasePipe } from './pipes/changecase.pipe';
import { ContactfilterPipe } from './pipes/contactfilter.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';

import { MaterialModuleModule } from "./material-module/material-module.module";
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateContactComponent,
    ContactsComponent,
    SignupComponent,
    SigninComponent,
    FormsComponent,
    PhoneDirective,
    ApiComponent,
    UserProfileComponent,
    ChangecasePipe,
    ContactfilterPipe,
    ParentComponent,
    ChildComponent,
    NotFoundComponent,
    Sibling1Component,
    Sibling2Component,
    MaterialComponent,
    BottomsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MaterialModuleModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
