import { Component } from '@angular/core';

@Component({
  selector: 'app-player-tourmanent',
  templateUrl: './player-tourmanent.component.html',
  styleUrls: ['./player-tourmanent.component.scss',

]
})
export class PlayerTourmanentComponent {
  title: string = 'Torneos';
  openSign: boolean = false;
  disableButtonSign: boolean = false;
  step = 0;

  setStep(index: number) { this.step = index; }
  nextStep() { this.step++; }
  prevStep() { this.step--; }

  dataClubs: any = [
    { nameClub: 'Arena Padel', state: 'Cordoba', city: 'Rio Ceballos', urlImage: "https://todotupadel.es/wp-content/uploads/2020/11/pistas-azules-800x445.jpg", info: 'Premios - Puntos - Sorteos' },
    { nameClub: 'Central CLub', state: 'Cordoba', city: 'Capital', urlImage: "https://as01.epimg.net/opinion/imagenes/2020/06/09/blogs/1591692680_508101_1591693087_noticia_normal_recorte1.jpg", info: 'Puntos - Sorteos' },
    { nameClub: 'La Dupla Padel', state: 'Cordoba', city: 'Rio Ceballos', urlImage: "https://www.zonadepadel.es/blog/wp-content/uploads/2015/04/star-padel-club-de-padel.jpg", info: 'Premios - Sorteos' },
    { nameClub: 'Padel Center', state: 'Cordoba', city: 'Rio Ceballos', urlImage: "https://www.palco23.com/files/2020/19_redaccion/competiciones/padel/padel-club-jeppesen-728.jpg", info: 'Premios - Puntos ' },
    { nameClub: 'Las Playas', state: 'Cordoba', city: 'Capital', urlImage: "https://assets-global.website-files.com/639778ab6f2e51ed2139df9a/639810f067761fd88b27543e_Hartwall.jpg", info: 'Premios - Puntos - Sorteos' },
    { nameClub: 'Baires Padel', state: 'Buenos Aires', city: 'CABA', urlImage: "http://www.padelspain.net/userfiles/Augusta_Padel_nominado_PWPA_2020.jpg", info: 'Premios - Puntos' },
    { nameClub: 'Palermo Padel', state: 'Buenos Aires', city: 'CABA', urlImage: "https://assets-global.website-files.com/639778ab6f2e51ed2139df9a/63c6b6f16998d8624dca6c95_Mejorset-Finland.jpeg", info: 'Premios - Sorteos' },
    { nameClub: '3º Set', state: 'La Coruña', city: 'La coruña', urlImage: "https://as01.epimg.net/opinion/imagenes/2020/06/09/blogs/1591692680_508101_1591693087_noticia_normal_recorte1.jpg", info: 'Premios - Sorteos' },

  ];

  OnOpenAcordion() {
    this.openSign = true;
    this.disableButtonSign = true;
  }

  OnCloseSing() {
    this.openSign = false;
    this.disableButtonSign = false;
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    } return `${value}`;
  }


}

