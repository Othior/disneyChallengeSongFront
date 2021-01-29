import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: string = JSON.parse(localStorage.getItem("User"));
  public messageUser: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.user);
  }
  public isUser(): string{
    if(this.user!== null){
      this.messageUser = this.user.toUpperCase();
      return this.messageUser;
    }else{
      this.messageUser = "se connecter";
      return this.messageUser;
    }
  }
  public deconnexion(){
    localStorage.removeItem("User");
    console.log("deconnexion !! ");
    window.location.href="/login";
  }


}
