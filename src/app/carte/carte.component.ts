import { ServiceService } from 'src/app/utilisateurService/service.service';
import { UserService } from './../serviceDB/userService/user.service';
import { CarteService } from './../serviceDB/carteService/carte.service';

import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public carte;
  protected rollNumber: number;
  public temps: number;
  public user: string;
  public listCarte: Array<number>;
  public timmer; // contient la boucle du temps et permet aussi de la stoper

  public readonly lengthCarteArray = 30;
  private readonly tempsMax: number = 15;

  constructor(
    private service: CarteService,
    private router: Router,
    private userService: ServiceService
  ) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    if(this.user === null){
      alert(" Vous n'avez pas de compte vous allez etre rediriger ");
      this.router.navigate(['/login']);
    }else{
      this.Jeux();
    }
  }

  // function qui recommence tout change la carte mais aussi remet le temps aux max
  public reset() {

    this.timerJeu(this.tempsMax);
    this.rollCard();

  }

  // function pour le jeu qui fait appelle aux function timerJeu et rollCard
  private Jeux() {

    // boucle pour le timer
    this.timerJeu(this.tempsMax);

    // change de carte
    this.rollCard();
  }

  // function pour le timer
  private timerJeu(time: number){
    this.timmer = timer(1000,1000).subscribe( temps => {
      if(time > 0){
        this.temps = time;
        time--;
      }
      else{
        // console.log("arreter => ", time);
        this.cancelBoucleTimer();
        this.router.navigate(["vote"]);
      }
    })
  }

  // function pour cancel la boucle du timer
  private cancelBoucleTimer(){
    this.timmer.unsubscribe();
  }

  //function qui permet de changer la carte
  private rollCard() {
    this.rollNumber = Math.floor((Math.random() * this.lengthCarteArray) + 1);

    this.service.get(this.rollNumber).toPromise()
      .then(data => {
        this.carte = data;
        // console.log("data",data['id']);
        // this.listCarte.push(data['id']);
        // localStorage.setItem("listCarte",JSON.stringify(this.listCarte));
      })
      .catch(err => {
        console.log('error Carte component => ', err)
      })
  }

  // function qui permet d'aller directement a la roue
  useRoue() {

  }
}
