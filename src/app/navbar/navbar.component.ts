import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = JSON.parse(localStorage.getItem("User"));

  constructor() { }

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


}
