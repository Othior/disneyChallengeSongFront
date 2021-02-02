import { Room } from './../Model/interface';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/utilisateurService/service.service';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../serviceDB/roomService/room.service';
import { UserService } from '../serviceDB/userService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: string;
  public creationInput;
  public rejoindreInput;
  private listRoom;

  constructor(
    private service: ServiceService,
    private roomService: RoomService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.service.user;
  }

  ngOnInit(): void {

    if (this.user === null || this.user === undefined) {
      alert(" Vous n'avez pas de compte vous allez etre rediriger ");
      this.router.navigate(['login']);
    }
    this.roomService.getList().subscribe(room => {
      this.listRoom = room;
    })

  }

  public createRoom() {
    this.addUserRoom(this.creationInput);
  }

  private addUserRoom(value: string) {
    this.userService.get(JSON.parse(localStorage.getItem("UserId"))).subscribe(user => {

      let utilisateur: any = user;
      console.log(utilisateur);
      let creer: Room = {
        name: value,
        user: utilisateur
      }

      this.roomService.create(creer).subscribe();
    });
  }

  public rejoindreRoom() {
    this.listRoom.forEach(element => {
      console.log("element => ", element);

      if (element.name === this.rejoindreInput) {
        localStorage.setItem("RoomName", JSON.stringify(element.name));
        if (element.user.pseudo === JSON.parse(localStorage.getItem("User"))) {
          console.log("element.name => ", element.name);
          localStorage.setItem("RoomId", JSON.stringify(element.id));
          console.log(element.id);
        }
      }

    });

    if (JSON.parse(localStorage.getItem("RoomName")) === this.rejoindreInput) {
      console.log("name Room => ", this.rejoindreInput);
      // retirer ligne room si il y est deja
      this.roomService.delete(JSON.parse(localStorage.getItem("RoomId"))).subscribe();
      // window.location.
    }
    else if(JSON.parse(localStorage.getItem("RoomName")) !== this.rejoindreInput){
      alert("Il n'y a pas de Partie qui possede ce nom "+ ' " '+ this.rejoindreInput +' " ');
    }else{
      // ajouter
      this.addUserRoom(this.rejoindreInput);

      this.router.navigate(['room/'+ this.rejoindreInput]);
    }


    // ajouter
    // this.addUserRoom(this.rejoindreInput);

    // retirer ligne room si il y est deja
    // this.roomService.delete(JSON.parse(localStorage.getItem("RoomId")))


    // JSON.parse(localStorage.getItem("RoomName")); // nom de la room deja utiliser
  }

}
