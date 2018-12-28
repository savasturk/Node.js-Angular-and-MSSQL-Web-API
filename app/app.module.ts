import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapboardComponent } from './mapboard/mapboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartistModule } from 'ng-chartist';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BusComponent } from './bus/bus.component';
import { BusStopsComponent } from './bus-stops/bus-stops.component';
import { EmployeeComponent } from './employee/employee.component';
import { PassGenerationComponent } from './pass-generation/pass-generation.component';
import { PassRegistrationComponent } from './pass-registration/pass-registration.component';
import { RequestComponent } from './request/request.component';
import { RouteInformationComponent } from './route-information/route-information.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { VerificationComponent } from './verification/verification.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboardComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    BusComponent,
    BusStopsComponent,
    EmployeeComponent,
    PassGenerationComponent,
    PassRegistrationComponent,
    RequestComponent,
    RouteInformationComponent,
    VehicleInformationComponent,
    VerificationComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartistModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
