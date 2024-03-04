import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from '../features/login/login.component';
import { LandingPageComponent } from '../pages/landing/landing-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  LoginComponent,
    ErrorComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    NavbarComponent,
    MenuComponent,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
  ],
  exports: [
    NgMaterialModule,
    NavbarComponent,
    MenuComponent,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
