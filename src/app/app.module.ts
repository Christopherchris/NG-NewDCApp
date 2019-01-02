import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { DoctorsComponent } from './view/doctors/doctors.component';
import { PatientsComponent } from './view/patients/patients.component';
import { PaymentsComponent } from './view/payments/payments.component';
import { AppointmentsComponent } from './view/appointments/appointments.component';
import { TreatmentsComponent } from './view/treatments/treatments.component';
import { PrescriptionsComponent } from './view/prescriptions/prescriptions.component';
import { StatisticsComponent } from './view/statistics/statistics.component';
import { ReportsComponent } from './view/reports/reports.component';
import { SettingsComponent } from './view/settings/settings.component';
import { P404Component } from './containers/error/404.component';
import { P500Component } from './containers/error/500.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule, } from '@coreui/angular';
import { ForgotpasswordComponent } from './containers/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './containers/changepassword/changepassword.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const APP_CONTAINERS = [DefaultLayoutComponent];

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginComponent,
    ...APP_CONTAINERS,
    HomeComponent,
    DoctorsComponent,
    PatientsComponent,
    PaymentsComponent,
    AppointmentsComponent,
    TreatmentsComponent,
    PrescriptionsComponent,
    StatisticsComponent,
    ReportsComponent,
    SettingsComponent,
    ForgotpasswordComponent,
    P404Component,
    P500Component,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
