
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/utilisateurService/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public service: ServiceService
  ) { }

  ngOnInit(): void {
  }

}
