import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { DbService } from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  public url: string;
  public listUrl: Array<string>;

  constructor(
    private serviceDb: DbService ,
    private http: HttpClient
  ) {
    this.url = serviceDb.UrlDB + 'carte'
   }

   getList(){
     // acces a la db avec notre angular
    //  let headers = new HttpHeaders().set('Authorization','Basic flisbtklvihe');
    //  this.http.get(this.url + '/list', { headers } );
     return this.http.get(this.url + '/list');
   }

   get(id: number){
    return this.http.get(this.url + '/read/'+ id);
  }

}
