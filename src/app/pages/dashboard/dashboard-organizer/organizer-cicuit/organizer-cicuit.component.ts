import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface DataCircuit {
  position: number;
  nameCircuit: string;
  year: number;
  actions: string;
}

const ELEMENT_DATA: DataCircuit[] = [
  { position: 1, nameCircuit: 'Sierras Chicas', year: 2024,  actions: 'edit' },
  { position: 2, nameCircuit: 'Zona Norte', year: 2024,  actions: 'edit'},
  { position: 3, nameCircuit: 'Fusion', year: 2024, actions: 'edit'},
];


@Component({
  selector: 'app-organizer-cicuit',
  templateUrl: './organizer-cicuit.component.html',
  styleUrls: ['./organizer-cicuit.component.scss']
})
export class OrganizerCicuitComponent {
  title: string = 'Tus Circuitos'
  inputFormControl = new FormControl('', [Validators.required]);
  viewAddform: boolean = false; 
  circuitName: string= '';
  idUpdate: string = '';
  panelOpenState: boolean = false;



  displayedColumns: string[] = ['position', 'nameCircuit', 'year', 'actions'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table?: MatTable<DataCircuit>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table?.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table?.renderRows();
  }

  viewAddformMet(value: boolean){
    this.viewAddform = value;
  }

  OnSave( value: boolean){
    // this.circuitName = cName;
    this.viewAddform = value;
  }

  OnUpdate(data: string, value:  boolean){
    this.idUpdate = data
    this.viewAddform = value;
  }

}
