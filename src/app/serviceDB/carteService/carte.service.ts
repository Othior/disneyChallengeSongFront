import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbService } from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  public url: string;

  constructor(
    private serviceDb: DbService ,
    private http: HttpClient
  ) {
    this.url = serviceDb.UrlDB + 'carte'
   }

   getList(){
     return this.http.get(this.url + '/list');
   }

   get(id: number){
    return this.http.get(this.url + '/read/'+ id);
  }

}
