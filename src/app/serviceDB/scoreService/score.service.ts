import { HttpClient } from '@angular/common/http';
import { DbService } from './../db.service';
import { Injectable } from '@angular/core';

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

}
