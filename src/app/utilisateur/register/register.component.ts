import { ServiceService } from 'src/app/utilisateurService/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public service: ServiceService
  ) { }

  ngOnInit(): void {
  }

}
