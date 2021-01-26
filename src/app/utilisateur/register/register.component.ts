import { Router } from '@angular/router';
import { CryptageService } from './../../cryptageService/cryptage.service';
import { createUser } from './../../Model/interface';
import { NgForm } from '@angular/forms';
import { UserService } from './../../serviceDB/userService/user.service';
import { ServiceService } from 'src/app/utilisateurService/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public msgError: string;
  public statusEror: boolean = false;

  constructor(
    public service: ServiceService,
    private user: UserService,
    private cryptage: CryptageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var encrypted = this.cryptage.set('123456$#@$^@1ERF', 'ERt2541');
    var decrypted = this.cryptage.get('123456$#@$^@1ERF', encrypted);

    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
  }

  create(formulaire: NgForm) {
    let userForm = formulaire.form.value;
    console.log('form => ', userForm);
    if(userForm.pseudo === "" && userForm.email === "" && userForm.password === "" && userForm.confirmePassword === ""){
      console.log(" Veuillez remplir le formulaire pour pouvoir poursuivre ");
      this.message(' Veuillez remplir le formulaire pour pouvoir poursuivre ');
    }
    else if (userForm.password === userForm.confirmePassword) {
      this.statusEror = false;
      this.msgError = '';

      let user: createUser = {
          pseudo:userForm.pseudo,
          email:userForm.email,
          password:this.cryptage.set('123456$#@$^@1ERF', userForm.password)
        }

        this.user.create(user).subscribe();
        setTimeout(()=>{
          localStorage.setItem("User",JSON.stringify(userForm.pseudo));
          window.location.href="/home";
          this.router.navigate(['home']);
        },3000)
      }else {
        console.log('se ne sont pas les meme password :( ');
        // this.statusEror = true;
        // this.msgError = 'le mot de passe et le confirme mot de passe ne sont pas identique';
        this.message(' le mot de passe et le confirme mot de passe ne sont pas identique ');
        console.log(this.statusEror);
        console.log(this.msgError);
    }
  }

  private message(value: string){
    this.statusEror = true;
    this.msgError = value;
  }
}
