import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ContactGuard } from './guards/contact.guard';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent}, 
  {path: 'signin', component: SigninComponent},
  {path: '', component: SidenavComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'api', component: ApiComponent},
    {path: 'api/:name', component: UserProfileComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'material', component: MaterialComponent},
    {path: 'nav', component: SidenavComponent},
    {path: 'contacts', children: [
      {path: '', component: CreateContactComponent},
      {path: 'details/:id', component: ContactsComponent}
    ], canActivate: [ContactGuard]},

  ]},
  {path: "**", component: NotFoundComponent},
  // {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
