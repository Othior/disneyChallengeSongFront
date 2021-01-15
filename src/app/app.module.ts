import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './utilisateur/login/login.component';
import { UpdateUtilisateurComponent } from './utilisateur/update-utilisateur/update-utilisateur.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './utilisateur/register/register.component';
import { CarteComponent } from './carte/carte.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoueComponent } from './roue/roue.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    LoginComponent,
    UpdateUtilisateurComponent,
    NotFoundComponent,
    NavbarComponent,
    RegisterComponent,
    CarteComponent,
    RoueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
