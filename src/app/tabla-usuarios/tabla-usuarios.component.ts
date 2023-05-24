import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
