import { DbService } from './../db.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUser } from 'src/app/Model/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listUser: Array<User> = [
    {
    id : 1,
    pseudo: 'Othior',
    email: 'test@gmail.com',
    password: 'test1234'
    },
    {
      id : 2,
      pseudo: 'Guest',
      email: 'guest@gmail.com',
      password: 'guest1234'
    },
    {
      id : 3,
      pseudo: 'Guest1',
      email: 'guest1@gmail.com',
      password: 'guest1234'
    }
  ]

  public url: string;
  constructor(
    private client: HttpClient,
    private db: DbService
  ) {
    this.url = this.db.UrlDB + "user/"
   }

  getList(){
    return this.client.get(this.url + "list/");
  }

  get(id: number){
    return this.client.get(this.url + "read/" + id );
  }

  vote(vote: string){
    let params = new HttpParams().set("Vote",vote);
    // this.client.get(this.url + "read/" + id , { params });
  }

  create(user: createUser){
    return this.client.post(this.url + 'create',user,{ responseType: 'type' as 'json' });
  }
  delete(id:number){
    // let headers = new HttpHeaders().set('Authorization','Basic flisbtklvihe');
    // return this.client.delete(this.url + 'delete/' + id ,{ headers: headers, responseType: 'type' as 'json'});
    // return this.client.delete(this.url + 'delete/' + id ,{ responseType: 'type' as 'json'});
  }


}

export interface User {
  id: number,
  pseudo: string,
  email: string,
  password: string
}
