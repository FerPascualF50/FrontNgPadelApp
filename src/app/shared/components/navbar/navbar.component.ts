import { Component } from '@angular/core';
import { NgMaterialModule } from '../../ng-material/ng-material.module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    NgMaterialModule
  ]
})
export class NavbarComponent {

}
