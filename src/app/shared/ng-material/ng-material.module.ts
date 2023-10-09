import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { NavbarComponent } from '../components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule
  ]

})
export class NgMaterialModule { }
