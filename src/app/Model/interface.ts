export interface regle{
 title:string,
 description:string
}

export interface Carte{
 nom: string ,
 url_image: string
}
export interface IsTrue{
  check: boolean,
  value: string
}

export interface User {
  id: number,
  email: string,
  pseudo: string,
  password: string,
}

export interface UserLogin {
  id: number,
  pseudo: string,
  password: string,
}
export interface createUser {
  email: string,
  pseudo: string,
  password: string,
}
export interface updateUser {
  email: string,
  pseudo: string,
  password: string,
  score: number
}
export interface scoreUser {
  score: number,
  user: User
}

export interface Room{
  name: string,
  user: User
}
