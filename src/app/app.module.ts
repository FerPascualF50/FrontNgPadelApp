import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LandingPageComponent } from './pages/landing/landing-page.component';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './features/login/login.component';
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


@NgModule({
  declarations: [
    AppComponent,
    // LandingPageComponent,
    // LoginComponent,
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
