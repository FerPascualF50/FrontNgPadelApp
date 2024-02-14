import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { PlayerTourmanentComponent } from './dashboardPlayer/player-tourmanent/player-tourmanent.component';
import { ClubsComponent } from './dashboardPlayer/clubs/clubs.component';
import { SchedulesComponent } from './dashboardPlayer/schedules/schedules.component';
import { NotificationsComponent } from './dashboardPlayer/notifications/notifications.component';
import { ConfigComponent } from './dashboardPlayer/config/config.component';
import { PaymentsComponent } from './dashboardPlayer/payments/payments.component';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnDestroy, AfterViewInit {

  @ViewChild('routerOutlet') routerOutlet!: ElementRef;
  mobileQuery: MediaQueryList;

  player: boolean = false;
  opened: boolean = true;
  private _mobileQueryListener: () => void;
  currentUrl: string = '';

  playerMenuList: any = [
    { buttonTitle: 'Torneos', url: '/dashboard/player/tournaments', nameComponent: PlayerTourmanentComponent },
    // { buttonTitle: 'Clubes', url: '/dashboard/player/clubs', nameComponent: ClubsComponent },
    { buttonTitle: 'Horarios', url: '/dashboard/player/schedules', nameComponent: SchedulesComponent },
    { buttonTitle: 'Notificaciones', url: '/dashboard/player/notifications', nameComponent: NotificationsComponent },
    { buttonTitle: 'Configuraciones', url: '/dashboard/player/config', nameComponent: ConfigComponent },
    { buttonTitle: 'Pagos', url: '/dashboard/player/payments', nameComponent: PaymentsComponent },
  ];
  ownerMenuList: any = [
    { buttonTitle: 'Circuitos', url: 'circuitos' },
    { buttonTitle: 'Torneos', url: 'torneos' },
    { buttonTitle: 'Jugadores', url: 'jugadores' },
    { buttonTitle: 'Categorias', url: 'categorias' },
    { buttonTitle: 'Clubes', url: 'clubes' },
    { buttonTitle: 'Racking', url: 'racking' },
    { buttonTitle: 'Pagos', url: 'pagos' },
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
