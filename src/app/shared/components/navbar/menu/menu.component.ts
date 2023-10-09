import { Component } from '@angular/core';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'], 
  standalone: true,
  imports: [
    NgMaterialModule
  ]
})
export class MenuComponent {

}
