import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

interface Circuit {
  name: string;
}

interface CategoryItem {
  value: string;
  viewValue: string;
}

interface CategoryGroup {
  disabled?: boolean;
  group: string;
  category: CategoryItem[];
}

@Component({
  selector: 'app-create',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})

export class CreateTournamentComponent {
  title: string = 'Crear Torneos'
  panelOpenState: boolean = false;
  
  clubs = new FormControl('');
  clubsList: string[] = ['Arena', 'La dupla'];

  // category = new FormControl('');
  // categoriesList: string[] = ['Arena', 'La dupla'];


  category = new FormControl('');
  categoriesList: CategoryGroup[] = [
    {
      group: 'Masculino',
      category: [
        {value: '1ra', viewValue: 'Primera'},
        {value: 'Especial', viewValue: '1ra y 2da'},
        {value: '2da', viewValue: 'Segunda'},
        {value: '3ra', viewValue: 'Tercera'},
        {value: '4ta', viewValue: 'Cuarta'},
        {value: '5ta', viewValue: 'Quinta'},
        {value: '6ta', viewValue: 'Sexta'},
        {value: '7ma', viewValue: 'Septima'},
        {value: '8va', viewValue: 'Octava'},
      ],
    },
    {
      group: 'Femenino',
      category: [
        {value: '1ra', viewValue: 'Primera'},
        {value: 'Especial', viewValue: '1ra y 2da'},
        {value: '2da', viewValue: 'Segunda'},
        {value: '3ra', viewValue: 'Tercera'},
        {value: '4ta', viewValue: 'Cuarta'},
        {value: '5ta', viewValue: 'Quinta'},
        {value: '6ta', viewValue: 'Sexta'},
        {value: '7ma', viewValue: 'Septima'},
        {value: '8va', viewValue: 'Octava'},
      ],
    },
    {
      group: 'Mixto',
      category: [
        {value: '1ra', viewValue: 'Primera'},
        {value: 'Especial', viewValue: '1ra y 2da'},
        {value: '2da', viewValue: 'Segunda'},
        {value: '3ra', viewValue: 'Tercera'},
        {value: '4ta', viewValue: 'Cuarta'},
        {value: '5ta', viewValue: 'Quinta'},
        {value: '6ta', viewValue: 'Sexta'},
        {value: '7ma', viewValue: 'Septima'},
        {value: '8va', viewValue: 'Octava'},
      ],
    },
  ];

  circuits: Circuit[] = [
    { name: 'Sierras Chicas' },
    { name: 'Zona Norte' },
    { name: 'Fusion' },
  ];
  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


}
