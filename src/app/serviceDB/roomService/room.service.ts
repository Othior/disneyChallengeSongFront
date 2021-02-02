import { DbService } from './../db.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from 'src/app/Model/interface';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private url: string;

  constructor(
    private client: HttpClient,
    private db: DbService
    )
    {
      this.url = db.UrlDB + 'room/';
    }

    getList(){
      return this.client.get(this.url + 'list');
    }

    get(id: number){
      return this.client.get(this.url + id);
    }

    create(room: Room){
      return this.client.post(this.url+ 'create/' , room ,{responseType:'type' as 'json'});
    }

    delete(id: number){
      return this.client.delete(this.url + 'delete/' + id ,{ responseType: 'type' as 'json'});
    }
}
