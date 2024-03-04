import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface DataTournament {
  position: number;
  nameTournament: string;
  nameCircuit: string;
  startDay: string;
  actions: string;
}

const ELEMENT_DATA: DataTournament[] = [
  { position: 1, nameTournament: 'Arena 2da Fecha', nameCircuit: 'Sierras Chicas',  startDay: '22-02-2024',  actions: 'edit' },
  { position: 2, nameTournament: 'Arena 1ra Fecha', nameCircuit: 'Sierras Chicas', startDay: '14-01-2024',  actions: 'edit'},
  { position: 3, nameTournament: 'Fusion 1ra Fecha', nameCircuit: 'Zona Norte', startDay: '21-01-2024', actions: 'edit'},
];


@Component({
  selector: 'app-organizer-tournament',
  templateUrl: './organizer-tournament.component.html',
  styleUrls: ['./organizer-tournament.component.scss']
})
export class OrganizerTournamentComponent {
  @ViewChild('routerOutlet') routerOutlet!: ElementRef;
  @ViewChild(MatTable) table?: MatTable<DataTournament>;

  title: string = 'Tus Torneos'
  inputFormControl = new FormControl('', [Validators.required]);
  viewAddform: boolean = false; 
  circuitName: string= '';
  idUpdate: string = '';
  panelOpenState: boolean = false;
  url: string = '/dashboard/organizer/tournaments/create';
  displayedColumns: string[] = ['position', 'nameTournament', 'nameCircuit', 'startDay', 'actions'];
  dataSource = [...ELEMENT_DATA];

  
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
    this.viewAddform = value;
  }

  OnUpdate(data: string, value:  boolean){
    this.idUpdate = data
    this.viewAddform = value;
  }
}
