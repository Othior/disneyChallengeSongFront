import { CarteService } from './../serviceDB/carteService/carte.service';

import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public carte;
  public temps: any;
  protected rollNumber: number;
  public check: boolean;

  public readonly lengthCarteArray = 30;
  public readonly scoreGood = 125;
  private tempsMax: number = 30;

  constructor(
    private service: CarteService
  ) {
    this.rollCard();
  }

  ngOnInit(): void {
    this.Jeux();
  }

  btnOui(){
    const isCheck = document.querySelector("#checkTrue").innerHTML;
    console.log("this.check => ", isCheck);
    console.log("this.check => ", document.querySelector("#checkTrue").textContent);
    if(document.querySelector("#checkTrue").textContent === "Oui"){
      this.check = true;
      console.log("oui");
    }else {
      console.log("non")
    }
  }

  private Jeux() {
    // timer fonctionne comme un setTimeout
    const checkBlock = document.querySelector(".checkResponseUser");
    return timer(1000, 1000).subscribe(data => {
      this.temps = this.tempsMax;
      this.tempsMax--;
      if(this.tempsMax <= 0){
        this.temps = 0;
        // this.reset();
        this.verification(this.tempsMax);
      }
    });
  }

  private verification(temps){
    const checkBlock = document.querySelector(".checkResponseUser");
    if (temps === 0){
      checkBlock.classList.remove("displayNone");
      this.check = false;
    }
    else if(this.check){
      checkBlock.classList.add("displayNone");
      this.reset();
    }else{
      console.log("Il faut faire un choix :D");
    }
    // console.log(" lengthCardArray => ",this.lengthCarteArray);
  }

  private reset() {
    this.tempsMax = 30;
    this.rollCard();
  }

  private rollCard() {
    this.rollNumber = Math.floor((Math.random() * this.lengthCarteArray) + 1);
    this.service.get(this.rollNumber).toPromise()
      .then(data => {
        this.carte = data;
      })
      .catch(err => {
        console.log('error Carte component => ', err)
      })
  }

  useRoue() {
    const isCheck = document.querySelector("#checkFalse").innerHTML;
    console.log("this.check => ", isCheck);
    console.log("this.check => ", document.querySelector("#checkFalse").innerHTML);
    if(document.querySelector("#checkFalse").innerHTML === "Non"){
      this.check = false;
      console.log("vous n'avez pas trouver la chanson ... :/");
    }
    console.log("useRoue");
  }



}
