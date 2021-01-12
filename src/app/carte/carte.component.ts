import { CarteService } from './../serviceDB/carteService/carte.service';

import { Component, OnInit } from '@angular/core';
import { timer, Observable , fromEvent, interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public carte;
  rollNumber: number;
  temps;

  constructor(
    private service: CarteService
  ) {
    this.rollCard();
  }

  ngOnInit(): void {
    this.testTimer();
  }



  testTimer() {
    return timer(1000, 1000).subscribe(data => {
      // console.log(data);
      this.temps = data;
    });
  }

  testDelayWhen() {
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(
      delayWhen(event => interval(Math.random() * 30000)),
    );
    delayedClicks.subscribe(x => console.log(x));
  }

  rollCard() {
    this.rollNumber = Math.floor((Math.random() * 4) + 1);
    this.service.get(this.rollNumber).toPromise()
      .then(data => {
        this.carte = data;
      })
      .catch(err => {
        console.log('error Carte component => ', err)
      })
  }

  useRoue() {
    console.log("useRoue");
  }

}
