import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { FormsComponent } from './forms/forms.component';
import { ContactGuard } from './guards/contact.guard';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent}, 
  {path: 'signin', component: SigninComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'contacts', children: [
    {path: '', component: CreateContactComponent},
    {path: 'details/:id', component: ContactsComponent}
  ], canActivate: [ContactGuard]},
  // {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
