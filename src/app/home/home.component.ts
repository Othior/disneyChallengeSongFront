import { Router } from '@angular/router';
import { ServiceService } from 'src/app/utilisateurService/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: string;

  constructor(
    private userService: ServiceService,
    private router: Router
  ) {
    this.user = this.userService.user ;
  }

  ngOnInit(): void {

    if(this.user === null){
      alert(" Vous n'avez pas de compte vous allez etre rediriger ");
      this.router.navigate(['login']);
    }
  }

}
