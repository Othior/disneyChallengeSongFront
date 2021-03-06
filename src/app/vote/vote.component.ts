import { ServiceService } from 'src/app/utilisateurService/service.service';
import { IsTrue } from './../Model/interface';
import { User, UserService } from './../serviceDB/userService/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public check: boolean;
  public listUser = this.serviceUser;
  public pseudo: string;
  listTrue: Array<IsTrue> = [];
  public user: string;

  //----------//
  // READONLY //
  //----------//
  public readonly scoreGood = 125;

  constructor(
    private serviceUser: UserService,
    private router: Router,
    private userService: ServiceService
  ) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    if (this.user === null) {
      alert(" Vous n'avez pas de compte vous allez etre rediriger ");
      this.router.navigate(['login']);
    }
  }

  private changeTrueOrFalse() {
    return this.check = !this.check
  }

  private isChecked(isTrue: boolean, value: string): IsTrue {

    if (isTrue) {
      let user: IsTrue = {
        check: true,
        value: value
      }
      return user;
    }
    return null;

  }

  public changeStatut(value) {
    let spanCheckbox: HTMLElement = document.querySelector("#user_span_" + value);
    let checkbox: HTMLInputElement = document.querySelector("#user_" + value);

    if (checkbox.value === checkbox.name) {
      if (!spanCheckbox.classList.contains("active")) {
        spanCheckbox.classList.add("active");
        checkbox.checked = true;
        this.listTrue.push(this.isChecked(checkbox.checked, value));
      }
      else {

        // creation element istrue pour le retrouver dans la listTrue
        let vote :IsTrue = {
          check: true,
          value: value
        }

        //systeme de suppression d'element dans la listTrue
        const index: number = this.listTrue.indexOf(vote);
        this.listTrue.splice(index, 1);
        // console.log("listTrue => ", this.listTrue);


        // checkbox deviens rouge
        spanCheckbox.classList.remove("active");
        checkbox.checked = false;
      }
    }
    this.check = checkbox.checked;
    this.pseudo = value;
    // console.log("listTrue => ", this.listTrue);
    // console.log("checkbox => ", this.check);
  }

  public valider() {

    // console.log('test => ', this.listTrue);

    // localStorage.setItem(this.pseudo,JSON.stringify(this.check));
    // this.serviceUser.vote(1,JSON.parse(localStorage.getItem(this.pseudo)));


    // console.log('list taille => ',  this.listTrue.length);
    if(this.listTrue.length === 0){
      console.log("carte")
      this.router.navigate(['carte']);
    }else{
      console.log("roue")
      this.router.navigate(['roue']);
    }
  }
}



