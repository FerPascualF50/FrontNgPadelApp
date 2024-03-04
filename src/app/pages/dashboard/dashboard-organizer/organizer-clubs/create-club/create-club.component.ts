import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataCountries } from './interfaces/IDataCountries';
// import  * as countries  from '../../../../../../assets/countries.json'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.scss']
})

export class CreateClubComponent {
  // @Inject(countries)
  title: string = 'Crear un Club';
  userOrganizerName: string = 'Martin Mancina';
  dataCountries?: DataCountries;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
    this.http.get<DataCountries>('/assets/data-world/countries.json').subscribe((x: DataCountries)=> {
      this.dataCountries=x;
  });

   }

  firstFormGroup = this._formBuilder.group({
    clubName: [this.dataCountries, Validators.required],
  });
  
}
