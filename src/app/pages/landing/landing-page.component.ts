import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Phrase {
  text: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})



export class LandingPageComponent {
  text1: string = '[x] Jugas al padel y...';
  text2: string = 'te gustan los torneos ?';
  text3: string = '[x] ORGANIZADOR y...';
  text4: string = 'queres todo automático ?';
  text5: string = 'Aquí toda la info';
  text8: string = 'de TORNEOS';
  text6: string = 'para jugadores';
  text7: string = 'y organizadores';
  text9: string = '...antes de ingresar';
  text10: string = 'Acordate';
  text11: string = 'NO tires globos';
  text12: string = 'Cortos';
  text13: string = 'Ingresa como test User: fer@gmail.com - Pass: admin123';

  constructor(private router: Router) { }

  toLogin() {
    this.router.navigate(['login'])
  }


}
