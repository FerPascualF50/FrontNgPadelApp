import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './features/signup/signup.component';
import { DialogComponent } from './features/signup/dialog/dialog.component';
import { DashboardPlayerComponent } from './pages/dashboard/dashboard-player/dashboard-player.component';
import { DashboardOrganizerComponent } from './pages/dashboard/dashboard-organizer/dashboard-organizer.component';
import { PlayerTourmanentComponent } from './pages/dashboard/dashboard-player/player-tourmanent/player-tourmanent.component';
import { SchedulesComponent } from './pages/dashboard/dashboard-player/schedules/schedules.component';
import { NotificationsComponent } from './pages/dashboard/dashboard-player/notifications/notifications.component';
import { ConfigComponent } from './pages/dashboard/dashboard-player/config/config.component';
import { PaymentsComponent } from './pages/dashboard/dashboard-player/payments/payments.component';
import { RankingPlayerComponent } from './pages/dashboard/dashboard-player/ranking-player/ranking-player.component';
import { OrganizerCicuitComponent } from './pages/dashboard/dashboard-organizer/organizer-cicuit/organizer-cicuit.component';
import { OrganizerClubsComponent } from './pages/dashboard/dashboard-organizer/organizer-clubs/organizer-clubs.component';
import { OrganizerTournamentComponent } from './pages/dashboard/dashboard-organizer/organizer-tournament/organizer-tournament.component';
import { OrganizerCategoriesComponent } from './pages/dashboard/dashboard-organizer/organizer-categories/organizer-categories.component';
import { OrganizerPlayersComponent } from './pages/dashboard/dashboard-organizer/organizer-players/organizer-players.component';
import { OrganizerResultsComponent } from './pages/dashboard/dashboard-organizer/organizer-results/organizer-results.component';
import { OrganizerPaymentsComponent } from './pages/dashboard/dashboard-organizer/organizer-payments/organizer-payments.component';
import { OrganizerKeysComponent } from './pages/dashboard/dashboard-organizer/organizer-keys/organizer-keys.component';
import { CreateTournamentComponent } from './pages/dashboard/dashboard-organizer/organizer-tournament/create-tournament/create-tournament.component';
import { CreateClubComponent } from './pages/dashboard/dashboard-organizer/organizer-clubs/create-club/create-club.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardPlayerComponent,
    DashboardOrganizerComponent,
    PlayerTourmanentComponent,
    RankingPlayerComponent,
    SchedulesComponent,
    NotificationsComponent,
    ConfigComponent,
    PaymentsComponent,
    SignupComponent,
    DialogComponent,
    OrganizerCicuitComponent,
    OrganizerClubsComponent,
    OrganizerTournamentComponent,
    OrganizerCategoriesComponent,
    OrganizerPlayersComponent,
    OrganizerResultsComponent,
    OrganizerPaymentsComponent,
    OrganizerKeysComponent,
    CreateTournamentComponent,
    CreateClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonModule
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
