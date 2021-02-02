import { UserService } from './../serviceDB/userService/user.service';
import { scoreUser } from './../Model/interface';
import { ScoreService } from './../serviceDB/scoreService/score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau-score',
  templateUrl: './tableau-score.component.html',
  styleUrls: ['./tableau-score.component.css']
})
export class TableauScoreComponent implements OnInit {

  public score: scoreUser;
  public userScore: any;
  public listScore: any;

  constructor(
    private service: ScoreService,
    private user: UserService
  ) { }

  ngOnInit(): void {
    // this.verification();
    // if (this.listScore.id === JSON.parse(localStorage.getItem("scoreId"))) {
    //   console.log('yes');
    // } else {
    //   console.log('non');
    //   this.getUser();
    //   setTimeout(() => {
    //     this.scoreGroupe();
    //   }, 3000)
    // }

  }


  public getAllScore() {
    this.service.getList().subscribe(data => {
      this.listScore = data;
      console.log('listScore', this.listScore);
    });

  }

  public getUser() {
    this.user.get(JSON.parse(localStorage.getItem("UserId"))).subscribe(data => {
      console.log('data =>', data);
      this.userScore = data;
    });


  }

  public scoreGroupe() {

    let score: scoreUser = {
      score: 0,
      user: {
        id: JSON.parse(localStorage.getItem("UserId")),
        email: this.userScore.email,
        pseudo: this.userScore.pseudo,
        password: this.userScore.password
      }
    }

    this.listScore.forEach(element => {
      if (JSON.parse(localStorage.getItem("UserId")) === element.user.id) {
        localStorage.setItem("scoreId", JSON.stringify(element.id));
      }
    });

    this.service.create(score).subscribe();

  }

  verification(){
    console.log(this.listScore)
    if (this.listScore.id === JSON.parse(localStorage.getItem("scoreId"))) {
      console.log('yes');
    } else {
      console.log('non');
      this.getUser();
      setTimeout(() => {
        this.scoreGroupe();
      }, 3000)
    }
  }


}
