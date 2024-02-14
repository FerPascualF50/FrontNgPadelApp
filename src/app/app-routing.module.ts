import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardPlayerComponent } from './pages/dashboard/dashboard-player/dashboard-player.component';
import { DashboardOrganizerComponent } from './pages/dashboard/dashboard-organizer/dashboard-organizer.component';
import { PlayerTourmanentComponent } from './pages/dashboard/dashboardPlayer/player-tourmanent/player-tourmanent.component';
import { ClubsComponent } from './pages/dashboard/dashboardPlayer/clubs/clubs.component';
import { NotificationsComponent } from './pages/dashboard/dashboardPlayer/notifications/notifications.component';
import { ConfigComponent } from './pages/dashboard/dashboardPlayer/config/config.component';
import { PaymentsComponent } from './pages/dashboard/dashboardPlayer/payments/payments.component';
import { SchedulesComponent } from './pages/dashboard/dashboardPlayer/schedules/schedules.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  {
    path: 'dashboard/player', component: DashboardComponent, children: [
      { path: 'tournaments', component: PlayerTourmanentComponent },
      { path: 'clubs', component: ClubsComponent },
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
