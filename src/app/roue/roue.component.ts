import { ServiceService } from 'src/app/utilisateurService/service.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RoueService } from '../serviceDB/roueService/roue.service';

@Component({
  selector: 'app-roue',
  templateUrl: './roue.component.html',
  styleUrls: ['./roue.component.css'],
  // animations:[
  //   trigger("slideDown",[
  //     transition("void => * ",
  //     [
  //       style({ opacity:0 }),
  //       animate(2000,style({  }))
  //     ]),
  //     transition('* => void',[
  //       animate(2000,style({ opacity:0 }))
  //     ])
  //   ])
  // ]
})
export class RoueComponent implements OnInit {

  public roue: any;
  public rollNumber;
  public GageArray;
  public user: string;

  public lengthGageArray: number = 4;

  constructor(
    private service : RoueService,
    private router: Router,
    private userService: ServiceService
  ) { }

  ngOnInit(): void {
    if(this.user === null){
      alert(" Vous n'avez pas de compte vous allez etre rediriger ");
      this.router.navigate(['login']);
    }else{
      this.Gage();
    }
  }

  Gage(){

    this.rollNumber = Math.floor((Math.random() * this.lengthGageArray) + 1);
    this.service.get(this.rollNumber).toPromise()
      .then(data => {
        this.roue = data;
        console.log("data =>" , this.roue.gage);
      })
      .catch(err => {
        console.log('error Carte component => ', err)
      })
  }

  cartePage(){
    // localStorage.getItem("")
    this.router.navigate(["carte"]);
  }


}
