import { Component } from '@angular/core';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { MenuComponent } from './menu/menu.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    NgMaterialModule,
    MenuComponent
  ]
})
export class NavbarComponent {
  logon: boolean = false;
  textLogin: string = '';

  constructor(private router: Router) { }

  toLogin() {
    this.router.navigate(['login'])
  }
}
