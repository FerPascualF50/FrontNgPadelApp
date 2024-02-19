import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { DashboardOrganizerComponent } from './pages/dashboard/dashboard-organizer/dashboard-organizer.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { SignupComponent } from './features/signup/signup.component';
import { DashboardPlayerComponent } from './pages/dashboard/dashboard-player/dashboard-player.component';
import { PlayerTourmanentComponent } from './pages/dashboard/dashboard-player/player-tourmanent/player-tourmanent.component';
import { SchedulesComponent } from './pages/dashboard/dashboard-player/schedules/schedules.component';
import { NotificationsComponent } from './pages/dashboard/dashboard-player/notifications/notifications.component';
import { ConfigComponent } from './pages/dashboard/dashboard-player/config/config.component';
import { PaymentsComponent } from './pages/dashboard/dashboard-player/payments/payments.component';
import { RankingPlayerComponent } from './pages/dashboard/dashboard-player/ranking-player/ranking-player.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard/player', component: DashboardPlayerComponent, children: [
      { path: 'tournaments', component: PlayerTourmanentComponent },
      { path: 'rankings', component: RankingPlayerComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'config', component: ConfigComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'organizer', component: DashboardOrganizerComponent }
    ]
  },

  {
    path: 'dashboard/owner', component: DashboardOrganizerComponent, children: [
      { path: 'tournaments', component: PlayerTourmanentComponent },
      // { path: 'clubs', component: ClubsComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'config', component: ConfigComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'organizer', component: DashboardOrganizerComponent }
    ]
  },
  // { path: 'proyectos', component: ProyectosComponent },
  // { path: 'quines_somos', component: QuinesSomosComponent },
  // { path: 'contacto', component: ContactoComponent, canActivate: [LoginGuardian] },
  // { path: 'update/:id', component: UpdateComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
