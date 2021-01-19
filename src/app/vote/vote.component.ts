import { User, UserService } from './../serviceDB/userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public check:boolean;
  public listUser = this.serviceUser;

  constructor(
    private serviceUser : UserService
  ) { }

  ngOnInit(): void {

  }

  changeTrueOrFalse(){
    return this.check = !this.check
  }

  changeStatut(value){
    let spanCheckbox: HTMLElement = document.querySelector("#user_span_"+value);
    let checkbox: HTMLInputElement = document.querySelector("#user_"+value);

    if( checkbox.value === checkbox.name ){
      if(!spanCheckbox.classList.contains("active")){
        spanCheckbox.classList.add("active");
        checkbox.checked = true;
      }else{
        spanCheckbox.classList.remove("active");
        checkbox.checked = false;
      }
    }

    this.check = checkbox.checked;
  }

  valider(){

  }
}



