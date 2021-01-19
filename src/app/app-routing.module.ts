import { VoteComponent } from './vote/vote.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoueComponent } from './roue/roue.component';
import { LoginComponent } from './utilisateur/login/login.component';
import { RegisterComponent } from './utilisateur/register/register.component';

const routes: Routes = [
  { path:'', component:RegisterComponent },
  // { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path:'carte', component:CarteComponent },
  { path:'vote' , component: VoteComponent },
  { path:'roue' , component: RoueComponent },
  { path:'roue', component:RoueComponent },
  { path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
