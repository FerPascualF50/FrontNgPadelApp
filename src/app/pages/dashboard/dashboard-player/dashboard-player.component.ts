import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlayerTourmanentComponent } from './player-tourmanent/player-tourmanent.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConfigComponent } from './config/config.component';
import { PaymentsComponent } from './payments/payments.component';
import { RankingPlayerComponent } from './ranking-player/ranking-player.component';

@Component({
  selector: 'app-dashboard-player',
  templateUrl: './dashboard-player.component.html',
  styleUrls: ['./dashboard-player.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardPlayerComponent implements OnDestroy, AfterViewInit {

  @ViewChild('routerOutlet') routerOutlet!: ElementRef;
  mobileQuery: MediaQueryList;

  player: boolean = false;
  opened: boolean = true;
  private _mobileQueryListener: () => void;
  currentUrl: string = '';

  playerMenuList: any = [
    { buttonTitle: 'Torneos', url: '/dashboard/player/tournaments', nameComponent: PlayerTourmanentComponent },
    { buttonTitle: 'Horarios', url: '/dashboard/player/schedules', nameComponent: SchedulesComponent },
    { buttonTitle: 'Ranking', url: '/dashboard/player/rankings', nameComponent: RankingPlayerComponent },
    { buttonTitle: 'Notificaciones', url: '/dashboard/player/notifications', nameComponent: NotificationsComponent },
    { buttonTitle: 'Configuraciones', url: '/dashboard/player/config', nameComponent: ConfigComponent },
    { buttonTitle: 'Pagos', url: '/dashboard/player/payments', nameComponent: PaymentsComponent },
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