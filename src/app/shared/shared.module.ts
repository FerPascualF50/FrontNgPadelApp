import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    NavbarComponent,
    MenuComponent,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    NgMaterialModule,
    NavbarComponent,
    MenuComponent,
    MatButtonModule,
    MatMenuModule
  ]
})
export class SharedModule { }
