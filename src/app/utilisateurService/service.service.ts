import { Injectable } from '@angular/core';
import { regle } from '../Model/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private enonce: regle = {
    title:'Règles du jeu',
    description:`Vous possédez une carte avec une image d'un personnage Disney ,
    il vous suffit juste de chanter une ou deux phrases de la chanson au quel
    appartient le personnage si vous ne chantez pas la bonne chanson vous allez
    devoir faire un gage à l'aide de la roue des gages`
  }
  constructor() { }
  get Enonce(): regle{
    return this.enonce;
  }
}
