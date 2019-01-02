import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HomeComponent } from './view/home/home.component';
import { DoctorsComponent } from './view/doctors/doctors.component';
import { PatientsComponent } from './view/patients/patients.component';
import { PaymentsComponent } from './view/payments/payments.component';
import { PrescriptionsComponent } from './view/prescriptions/prescriptions.component';
import { ReportsComponent } from './view/reports/reports.component';
import { SettingsComponent } from './view/settings/settings.component';
import { StatisticsComponent } from './view/statistics/statistics.component';
import { TreatmentsComponent } from './view/treatments/treatments.component';
import { AppointmentsComponent } from './view/appointments/appointments.component';
import { ForgotpasswordComponent } from './containers/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './containers/changepassword/changepassword.component';
import { P404Component } from './containers/error/404.component';
import { P500Component } from './containers/error/500.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  {
    path: 'no-back',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'prescriptions', component: PrescriptionsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'treatments', component: TreatmentsComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
