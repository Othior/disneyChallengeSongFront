import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private BASE_URL: string = 'http://localhost:9191/'

  constructor() { }

  get UrlDB(): string{
    return this.BASE_URL;
  }
}
