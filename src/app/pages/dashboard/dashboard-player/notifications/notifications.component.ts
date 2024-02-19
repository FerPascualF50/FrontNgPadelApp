import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  title: string = 'Nofificaciones (*_*)'
  centered: boolean = false;
  disabled: boolean = false;
  unbounded: boolean = false;
  radius: number = 4;
  color: string = '#10a37f';
  isChecked = true;
  panelOpenState = false;
  durationInSeconds = 1.5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  dataPayments: any = [
    { tournamentId: '1', tournamentname: 'La dupla', weekDay: 'Viernes', dayNumber: '13', month: 'Mar', year: '2024', hour: '14:53', text:'Se cargaron los horarios de partidos'},
    { tournamentId: '2', tournamentname: 'La dupla', weekDay: 'Sábado', dayNumber: '15', month: 'Mar', year: '2024', hour: '20:18', text:'Alguno de tus horarios se modificarion, podes verificarlo en el menu Horarios' }, 
  ];

  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Se guardaron los cambios','OK',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  
}
