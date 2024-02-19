import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent {
  title: string = 'Tus Horarios'
  // successFalse: string = 'Ups... parece que el organizador del TORNEO aun no cerro las inscripciones. Revisa nuevamente mas tarde'
  panelOpenState = false;

  keyTournament: any = [
    {
      panelTitle: 'Zona', match: [
        { name: '1º partido:', weekDay: 'Viernes', dayNumber: '15', month: 'Mar', year: '2024', hour: '18:00', club:'Arena Padel' },
        { name: '2º partido:', weekDay: 'Viernes', dayNumber: '15', month: 'Mar', year: '2024', hour: '20:00', club:'La Dupla'},
      ]
    },
    {
      panelTitle: '32º de final ', match: [
        { name: 'Partido:', weekDay: 'Viernes', dayNumber: '15', month: 'Mar', year: '2024', hour: '21:00', club:'La Recoba' },
      ]
    },
    {
      panelTitle: '16º de final ', match: [
        { name: 'Partido:', weekDay: 'Viernes', dayNumber: '15', month: 'Mar', year: '2024', hour: '23:00', club:'Arena Padel' },
      ]
    },
    {
      panelTitle: '8º de final ', match: [
        { name: 'Partido:', weekDay: 'Sabado', dayNumber: '16', month: 'Mar', year: '2024', hour: '08:00', club:'La Dupla' },
      ]
    },
    {
      panelTitle: '4º de final ', match: [
        { name: 'Partido:', weekDay: 'Sabado', dayNumber: '16', month: 'Mar', year: '2024', hour: '12:00', club:'La Recoba' },
      ]
    },
    {
      panelTitle: 'Semi final ', match: [
        { name: '1º partido:', weekDay: 'Domingo', dayNumber: '17', month: 'Mar', year: '2024', hour: '10:00', club:'La Recoba' },
      ]
    },
    {
      panelTitle: 'Final ', match: [
        { name: 'Partido:', weekDay: 'Domingo', dayNumber: '17', month: 'Mar', year: '2024', hour: '18:00', club:'La Dupla' },
      ]
    },
    
  ]

}
