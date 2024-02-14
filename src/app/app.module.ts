import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardPlayerComponent } from './pages/dashboard/dashboard-player/dashboard-player.component';
import { DashboardOrganizerComponent } from './pages/dashboard/dashboard-organizer/dashboard-organizer.component';
import { PlayerTourmanentComponent } from './pages/dashboard/dashboardPlayer/player-tourmanent/player-tourmanent.component';
import { ClubsComponent } from './pages/dashboard/dashboardPlayer/clubs/clubs.component';
import { SchedulesComponent } from './pages/dashboard/dashboardPlayer/schedules/schedules.component';
import { NotificationsComponent } from './pages/dashboard/dashboardPlayer/notifications/notifications.component';
import { ConfigComponent } from './pages/dashboard/dashboardPlayer/config/config.component';
import { PaymentsComponent } from './pages/dashboard/dashboardPlayer/payments/payments.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './features/login/login.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    // LandingPageComponent,
    // LoginComponent,
    DashboardComponent,
    DashboardPlayerComponent,
    DashboardOrganizerComponent,
    PlayerTourmanentComponent,
    ClubsComponent,
    SchedulesComponent,
    NotificationsComponent,
    ConfigComponent,
    PaymentsComponent,
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
