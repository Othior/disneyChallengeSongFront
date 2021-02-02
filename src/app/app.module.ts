import { CryptageService } from './cryptageService/cryptage.service';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoueComponent } from './roue/roue.component';
import { VoteComponent } from './vote/vote.component';
import { TableauScoreComponent } from './tableau-score/tableau-score.component';
import { HomeComponent } from './home/home.component';
import { InfoJeuComponent } from './info-jeu/info-jeu.component';
import { RoomComponent } from './room/room.component';

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
    RoueComponent,
    VoteComponent,
    TableauScoreComponent,
    HomeComponent,
    InfoJeuComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CryptageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
