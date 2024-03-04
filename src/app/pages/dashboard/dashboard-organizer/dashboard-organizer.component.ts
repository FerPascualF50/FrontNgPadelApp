import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { OrganizerCicuitComponent } from './organizer-cicuit/organizer-cicuit.component';
import { OrganizerClubsComponent } from './organizer-clubs/organizer-clubs.component';
import { OrganizerTournamentComponent } from './organizer-tournament/organizer-tournament.component';
import { OrganizerCategoriesComponent } from './organizer-categories/organizer-categories.component';
import { OrganizerPlayersComponent } from './organizer-players/organizer-players.component';
import { OrganizerResultsComponent } from './organizer-results/organizer-results.component';
import { OrganizerPaymentsComponent } from './organizer-payments/organizer-payments.component';
import { OrganizerKeysComponent } from './organizer-keys/organizer-keys.component';
import { CreateTournamentComponent } from './organizer-tournament/create-tournament/create-tournament.component';
import { CreateClubComponent } from './organizer-clubs/create-club/create-club.component';

@Component({
  selector: 'app-dashboard-organizer',
  templateUrl: './dashboard-organizer.component.html',
  styleUrls: ['./dashboard-organizer.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardOrganizerComponent implements OnDestroy, AfterViewInit{

  @ViewChild('routerOutlet') routerOutlet!: ElementRef;
  mobileQuery: MediaQueryList;

  organizer: boolean = false;
  opened: boolean = true;
  private _mobileQueryListener: () => void;
  currentUrl: string = '';

  organizerMenuList: any = [
    { buttonTitle: 'Circuitos', url: '/dashboard/organizer/circuits' , nameComponent: OrganizerCicuitComponent },
    { buttonTitle: 'Clubes', url: '/dashboard/organizer/clubs', nameComponent: OrganizerClubsComponent },
    { buttonTitle: 'Torneos', url: '/dashboard/organizer/tournaments', nameComponent: OrganizerTournamentComponent },
    { buttonTitle: 'Categorias', url: '/dashboard/organizer/categories', nameComponent: OrganizerCategoriesComponent },
    { buttonTitle: 'Jugadores', url: '/dashboard/organizer/players', nameComponent: OrganizerPlayersComponent },
    { buttonTitle: 'Resultados', url: '/dashboard/organizer/results', nameComponent: OrganizerResultsComponent },
    { buttonTitle: 'Llaves', url: '/dashboard/organizer/keys', nameComponent: OrganizerKeysComponent },
    { buttonTitle: 'Pagos', url: '/dashboard/organizer/payments', nameComponent: OrganizerPaymentsComponent },
    { buttonTitle: 'CreateClub', url: '/dashboard/organizer/clubs/create', nameComponent: CreateClubComponent },
    { buttonTitle: 'CreateTournament', url: '/dashboard/organizer/tournaments/create', nameComponent: CreateTournamentComponent },
  ];

  // titlebuttons = Array.from({ length: this.playerMenuList.length },(_, i) => `${this.playerMenuList[i]}`);
  // urls = Array.from({ length: this.playerMenuList.length },(_, i) => `${this.playerMenuList[i].url}`);
  // comp = Array.from({ length: this.playerMenuList.length },(_, i) => this.playerMenuList[i].Component);


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentUrl = this.router.url;
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
