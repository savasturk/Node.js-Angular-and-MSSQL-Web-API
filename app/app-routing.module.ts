import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapboardComponent } from './mapboard/mapboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { PassGenerationComponent } from './pass-generation/pass-generation.component';
import { PassRegistrationComponent } from './pass-registration/pass-registration.component';
import { RequestComponent } from './request/request.component';
import { RouteInformationComponent } from './route-information/route-information.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { VerificationComponent } from './verification/verification.component';
import { BusComponent } from './bus/bus.component';
import { BusStopsComponent } from './bus-stops/bus-stops.component';
import { AdminComponent } from './admin/admin.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mapboard', component: MapboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'bus', component: BusComponent},
  { path: 'bus-stops', component: BusStopsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'pass-generation', component: PassGenerationComponent},
  { path: 'pass-registration', component: PassRegistrationComponent},
  { path: 'request', component: RequestComponent},
  { path: 'route-information', component: RouteInformationComponent},
  // { path: 'user-information', component: UserInformationComponent},
  { path: 'vehicle-information', component: VehicleInformationComponent},
  { path: 'verification', component: VerificationComponent},
  { path: 'main-page', component: MainPageComponent},
  { path: 'main-page/main-page.component.html', component: MainPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
