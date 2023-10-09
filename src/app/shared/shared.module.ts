import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
     //NavbarComponent
    
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    NavbarComponent
  ],
  exports:[
    NgMaterialModule,
    NavbarComponent
  ]
})
export class SharedModule { }
