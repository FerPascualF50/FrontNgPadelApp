import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

// export interface PeriodicElement {
//   date: number;
//   tournament: string;
//   instance: string;
//   points: number;
// }
export interface DataTournament {
  circuitId: string;
  circuitName: string;
  rank: number;
  sumPoints: number;
  year: string;
  dataRanking: {
    date: number;
    tournament: string;
    instance: string;
    points: number;
  }[];
}

export interface DataRanking {
  circuitId: string;
  circuitName: string;
  rank: number;
  SumPoints: number;
  year: string
}

const ELEMENT_DATA: DataTournament[] = [
  { 
    circuitId: '1', 
    circuitName: 'Fusion', 
    rank: 5, 
    sumPoints: 2210, 
    year: '2024', 
    dataRanking: [
      { date: 1, tournament: 'Arena', instance: '4tos', points: 180 },
      { date: 2, tournament: 'La dupla', instance: 'Semi', points: 360 },
      { date: 3, tournament: 'Shell', instance: 'Final', points: 600 },
      { date: 4, tournament: 'Central', instance: 'Campeón', points: 1000 },
      { date: 5, tournament: 'Rivera', instance: '8vos', points: 60 },
      { date: 6, tournament: 'Rivera', instance: '16avos', points: 10 },
      { date: 7, tournament: 'Rivera', instance: '32avos', points: 0 }
    ]
  },
  { 
    circuitId: '1', 
    circuitName: 'Zona Norte', 
    rank: 38, 
    sumPoints: 840, 
    year: '2024', 
    dataRanking: [
      { date: 1, tournament: 'Central', instance: '4tos', points: 180 },
      { date: 2, tournament: 'Central', instance: '8vos', points: 60 },
      { date: 3, tournament: 'Nivel', instance: 'Semi', points: 360 },
      { date: 4, tournament: 'Shell', instance: '4tos', points: 180 },
      { date: 5, tournament: 'Nivel', instance: '8vos', points: 60 },
      { date: 6, tournament: 'Los Troncos', instance: '32avos', points: 0 },
      { date: 7, tournament: 'Nivel', instance: '32avos', points: 0 },
      { date: 8, tournament: 'Central', instance: '16avos', points: 10 },
      { date: 9, tournament: 'Nivel', instance: '32avos', points: 0 },
      { date: 10, tournament: 'Central', instance: '16avos', points: 10 },
      { date: 11, tournament: 'Los Troncos', instance: '4tos', points: 180 }




    ]
  },
];

// const ELEMENT_DATA: DataRanking[] = [
//   {
//     circuitId: '1', circuitName: 'Fusion', rank: 5, SumPoints: 2210, year: '2024', DataTournament: [
//       { date: 1, tournament: 'Arena', instance: '4tos', points: 180 },
//       { date: 2, tournament: 'La dupla', instance: 'Semi', points: 360 },
//       { date: 3, tournament: 'Shell', instance: 'Final', points: 600 },
//       { date: 4, tournament: 'Central', instance: 'Campeón', points: 1000 },
//       { date: 5, tournament: 'Rivera', instance: '8vos', points: 60 },
//       { date: 6, tournament: 'Rivera', instance: '16avos', points: 10 },
//       { date: 7, tournament: 'Rivera', instance: '32avos', points: 0 },
//     ]

//   },
//   {
//     circuitId: '1', circuitName: 'Fusion', rank: 5, SumPoints: 2210, year: '2024',
//     dataTournament: [
//       { date: 1, tournament: 'Arena', instance: '4tos', points: 180 },
//       { date: 2, tournament: 'La dupla', instance: 'Semi', points: 360 },
//       { date: 3, tournament: 'Shell', instance: 'Final', points: 600 },
//       { date: 4, tournament: 'Central', instance: 'Campeón', points: 1000 },
//       { date: 5, tournament: 'Rivera', instance: '8vos', points: 60 },
//       { date: 6, tournament: 'Rivera', instance: '16avos', points: 10 },
//       { date: 7, tournament: 'Rivera', instance: '32avos', points: 0 },
//     ]
//   },
// ];





@Component({
  selector: 'app-ranking-player',
  templateUrl: './ranking-player.component.html',
  styleUrls: ['./ranking-player.component.scss']
})
export class RankingPlayerComponent {
  panelOpenState = false;

  title: string = 'Tus Rankings'
  centered: boolean = false;
  disabled: boolean = false;
  unbounded: boolean = false;
  radius: number = 4;
  color: string = '#10a37f';
  isChecked = true;
  durationInSeconds = 1.5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';



  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    // console.log(this.dataRankigs.dataTournament)

    console.log(this.dataSource)
    // console.log(this.dataSource[0].dataRanking)
  }

  openSnackBar() {
    this._snackBar.open('Se guardaron los cambios', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
  // dataRankigs: DataRanking[] = [
  //   { circuitId: '1', circuitName: 'Fusion', rank: 5, SumPoints: 2210, year: '2024' },
  //   { circuitId: '2', circuitName: 'Fusion', rank: 5, SumPoints: 2210, year: '2024' }
  // ];

  displayedColumns: string[] = ['date', 'tournament', 'instance', 'points'];
  dataSource = ELEMENT_DATA;
  dataSourceToTable = ELEMENT_DATA[0].dataRanking
 
}
