import { HttpClient } from '@angular/common/http';
import { DbService } from './../db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoueService {

  private readonly url: string;

  constructor(
    private db: DbService,
    private client: HttpClient
  ) {
    this.url = db.UrlDB + 'roue/'
   }

   public getList(){
     return this.client.get(this.url+ "list");
   }

   public get(id: number){
     return this.client.get(this.url+'read/'+id)
   }


}
