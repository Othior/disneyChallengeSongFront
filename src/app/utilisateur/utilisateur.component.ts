import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  public msgError: string;
  public statusEror: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  public message(value: string){
    this.statusEror = true;
    this.msgError = value;
  }

}
