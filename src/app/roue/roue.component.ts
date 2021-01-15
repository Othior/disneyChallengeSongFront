import { Component, OnInit } from '@angular/core';
import { CarteService } from '../serviceDB/carteService/carte.service';

@Component({
  selector: 'app-roue',
  templateUrl: './roue.component.html',
  styleUrls: ['./roue.component.css']
})
export class RoueComponent implements OnInit {

  public carte;

  constructor(
    private service : CarteService
  ) { }

  ngOnInit(): void {
    this.listCarte();
  }

  listCarte() {
    return this.service.getList().subscribe(data => {
      this.carte = data;
    });
  }


}
