import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = JSON.parse(localStorage.getItem("User"));

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.user);
  }
  public isUser(): string{
    if(this.user!== null){
      return this.user;
    }else{
      return "Pas de compte"
    }
  }
  public deconnexion(){
    localStorage.removeItem("User");
    console.log("deconnexion !! ");
    window.location.href="/login";
  }


}
