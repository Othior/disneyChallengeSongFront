import { Component, OnInit } from '@angular/core';
import { CarteService } from '../serviceDB/carteService/carte.service';

@Component({
  selector: 'app-info-jeu',
  templateUrl: './info-jeu.component.html',
  styleUrls: ['./info-jeu.component.css']
})
export class InfoJeuComponent implements OnInit {

  carte: any;

  constructor(
    private service: CarteService
  ) { }

  ngOnInit(): void {
    this.service.getList().subscribe(data => {
      this.carte = data;
    })
  }

}
