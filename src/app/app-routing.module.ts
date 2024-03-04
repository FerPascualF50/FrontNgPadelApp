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
import { OrganizerTournamentComponent } from './pages/dashboard/dashboard-organizer/organizer-tournament/organizer-tournament.component';
import { OrganizerCicuitComponent } from './pages/dashboard/dashboard-organizer/organizer-cicuit/organizer-cicuit.component';
import { OrganizerClubsComponent } from './pages/dashboard/dashboard-organizer/organizer-clubs/organizer-clubs.component';
import { OrganizerCategoriesComponent } from './pages/dashboard/dashboard-organizer/organizer-categories/organizer-categories.component';
import { OrganizerPlayersComponent } from './pages/dashboard/dashboard-organizer/organizer-players/organizer-players.component';
import { OrganizerResultsComponent } from './pages/dashboard/dashboard-organizer/organizer-results/organizer-results.component';
import { OrganizerPaymentsComponent } from './pages/dashboard/dashboard-organizer/organizer-payments/organizer-payments.component';
import { OrganizerKeysComponent } from './pages/dashboard/dashboard-organizer/organizer-keys/organizer-keys.component';
import { CreateTournamentComponent } from './pages/dashboard/dashboard-organizer/organizer-tournament/create-tournament/create-tournament.component';
import { CreateClubComponent } from './pages/dashboard/dashboard-organizer/organizer-clubs/create-club/create-club.component';

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
    ]
  },
  {
    path: 'dashboard/organizer', component: DashboardOrganizerComponent, children: [
      { path: 'circuits', component: OrganizerCicuitComponent },
      {
        path: 'clubs', component: OrganizerClubsComponent, children: [
          { path: 'create', component: CreateClubComponent }]
      },
      {
        path: 'tournaments', component: OrganizerTournamentComponent, children: [
          { path: 'create', component: CreateTournamentComponent }]
      },
      { path: 'categories', component: OrganizerCategoriesComponent },
      { path: 'players', component: OrganizerPlayersComponent },
      { path: 'results', component: OrganizerResultsComponent },
      { path: 'payments', component: OrganizerPaymentsComponent },
      { path: 'keys', component: OrganizerKeysComponent }
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
