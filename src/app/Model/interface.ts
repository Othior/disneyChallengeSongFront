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
