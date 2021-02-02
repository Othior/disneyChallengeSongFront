import { scoreUser } from './../../Model/interface';
import { HttpClient } from '@angular/common/http';
import { DbService } from './../db.service';
import { Injectable } from '@angular/core';
import { createUser } from 'src/app/Model/interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  url: string;

  constructor(
    private service: DbService,
    private client: HttpClient
  ) {
    this.url = service.UrlDB + 'score/';
  }

    getList(){
      return this.client.get(this.url + 'list');
    }

    get(id: number){
      return this.client.get(this.url + 'read/' + id);
    }

    create(score: scoreUser){
      return this.client.post(this.url + 'create',score,{ responseType: 'type' as 'json' });
    }

}
