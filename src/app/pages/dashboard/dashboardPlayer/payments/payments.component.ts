import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  title: string = 'Tus Pagos'
  panelOpenState = false;

  dataPayments: any = [
    { tournamentId: '1', tournamentname: 'La dupla', amount: '$16.000', weekDay: 'Viernes', dayNumber: '15', month: 'Mar', year: '2024', hour: '21:00', method:'Mercado Pago'},
    { tournamentId: '2', tournamentname: 'Arena Padel', amount: '$6.500', weekDay: 'Viernes', dayNumber: '15', month: 'Mar', year: '2024', hour: '21:00', method:'Stripe' }, 
  ];
}
