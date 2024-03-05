import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataCountries } from './interfaces/IDataCountries';
import { HttpClient } from '@angular/common/http';
import { DataStates } from './interfaces/IDataStates';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.scss'],
})

export class CreateClubComponent {
  title: string = 'Crear un Club';
  userOrganizerName: string = 'Martin Cancina';
  dataCountries?: DataCountries;
  dataStates?: DataStates;
  selectedCountryId = new FormControl('');
  selectedStateId?: number;



  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.http.get<DataCountries>('/assets/data-world/countries.json').subscribe((data: DataCountries) => {
      this.dataCountries = data;
    });

    this.http.get<DataStates>('/assets/data-world/states.json').subscribe((data: DataStates) => {
      this.dataStates = data;
    });
    console.log(this.selectedCountryId)
  }



  createFormGroup = this.fb.group({
    clubName: ['', Validators.required],
    qtycourts: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    countryId: [this.selectedCountryId, Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    whatsApp: ['', Validators.required],
    longitude: ['', Validators.required],
    latitude: ['', Validators.required]
  });


}
