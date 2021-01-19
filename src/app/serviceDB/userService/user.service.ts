import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public Othior: User = {
  //   id : 1,
  //   pseudo: 'Othior',
  //   email: 'test@gmail.com',
  //   password: 'test1234'
  // }
  // public Guest: User = {
  //   id : 2,
  //   pseudo: 'Guest',
  //   email: 'guest@gmail.com',
  //   password: 'guest1234'
  // }

  public listUser: Array<User> =
  [
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

  constructor() { }
}

export interface User {
  id: number,
  pseudo: string,
  email: string,
  password: string
}
