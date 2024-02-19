import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';


interface Rol {
  value: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loading = false;
  selectedValue: string = '';

  roles: Rol[] = [
    { value: 'Jugador' },
    { value: 'Organizador' },

  ];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, public dialog: MatDialog) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required],

    });
  }



  signin: boolean = true;


  ngOnInit(): void {
    this.openDialog
  }
  ngOnDestroy(): void {
    // this.openDialog
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario === 'fer@gmail.com' && password === 'admin123') {
      this.fakeLoading() // redirect to dashboard
    } else {
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o Contraseña invalidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard/player']);
    }, 1000)
  }

  onSignin() {
    this.router.navigate(['login'])
  }
  onGoogleButton() {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
    console.log(this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    }))

  }


}
