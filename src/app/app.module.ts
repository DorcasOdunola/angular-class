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
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
