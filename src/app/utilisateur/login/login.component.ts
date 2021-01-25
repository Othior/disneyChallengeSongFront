import { CryptageService } from './../../cryptageService/cryptage.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from './../../serviceDB/userService/user.service';

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/utilisateurService/service.service';
import { User } from 'src/app/Model/interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // private listUser: any;

  constructor(
    private userService: UserService,
    public service: ServiceService,
    private router: Router,
    private cryptage: CryptageService
  ) { }

  ngOnInit(): void {

  }

  login(formulaire: NgForm){

    let valueForm = formulaire.form.value;

    this.userService.getList().subscribe( data => {
        let listUser: any = data;
        listUser.map( el => {
          let passwordNotHash = this.cryptage.get('123456$#@$^@1ERF',el.password);
          if(el.pseudo === valueForm.pseudo && passwordNotHash === valueForm.password){
            localStorage.setItem("User",JSON.stringify(valueForm.pseudo));
            this.router.navigate(['home']);
          }
        });
    });

  }

}
