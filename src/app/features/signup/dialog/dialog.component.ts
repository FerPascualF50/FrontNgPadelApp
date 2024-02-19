import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  name: string = ''
  loading = false;


  constructor(public dialogRef: MatDialogRef<SignupComponent>, private router: Router) { }

  onClickRol(value: string){
    this.name = value;
    this.loading = true;
    setTimeout(() => {
      this.router.navigate([`dashboard/${this.name}`]);
    }, 1000)
    // this.router.navigate([`dashboard/${this.name}`])
    console.log(this.name)
  }

}
