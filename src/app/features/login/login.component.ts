import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// interface Rol {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  form: FormGroup;
  loading = false;
  selectedValue: string = '';

  // roles: Rol[] = [
  //   {value: 'Jugador', viewValue: 'Jugador'},
  //   {value: 'Organizador', viewValue: 'Organizador'},
    
  // ];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      // rol: ['', Validators.required],
      
    })
  }

  signin: boolean = true;


  ngOnInit(): void {
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
      this.router.navigate(['dashboard/organizer']);
    }, 1000)
  }

  onSignup(){
    this.router.navigate(['signup'])
  }
}