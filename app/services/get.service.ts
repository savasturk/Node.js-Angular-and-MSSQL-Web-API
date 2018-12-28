import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IBUS } from '../../../../../shared_modules/models/bus';
import { IBUSSTOPS } from '../../../../../shared_modules/models/bus-stops';
import { Observable } from 'rxjs';
import { IEMPLOYEE } from '../../../../../shared_modules/models/employee';
import { IPASSGENERATION } from '../../../../../shared_modules/models/pass-generation';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';
import { IREQUEST } from '../../../../../shared_modules/models/request';
import { IROUTEINFORMATION } from '../../../../../shared_modules/models/route-information';
import { IVEHICLEINFORMATION } from '../../../../../shared_modules/models/vehicle-information';
import { IVERIFICATION } from '../../../../../shared_modules/models/verification';


@Injectable()
export class GetService {
  constructor(private http: HttpClient) { }

  urlgetBussesString = 'http://127.0.0.1:8080/api/getBusses';
  urlgetBusStopstring= 'http://127.0.0.1:8080/api/getBusStops';
  urlgetEmployeeString = 'http://127.0.0.1:8080/api/getEmployees/';
  urlgetPassGeneration ='http://127.0.0.1:8080/api/getPassGenerations/';
  urlgetPassRegistration = 'http://127.0.0.1:8080/api/getPassRegistrations/';
  getrequest = 'http://127.0.0.1:8080/api/getRequests/';
  getRouteInformationn = 'http://127.0.0.1:8080/api/getRouteInformations/';
  getVehicleInformation = 'http://127.0.0.1:8080/api/getVehicleInformations/';
  getVerification = 'http://127.0.0.1:8080/api/getVerifications/';

  getBusses(): Observable<IBUS[]> {
    return this.http.get<IBUS[]>(this.urlgetBussesString).pipe(map(data => data = data.payload));
  }
  getBusStops(): Observable<IBUSSTOPS[]> {
    return this.http.get<IBUSSTOPS[]>(this.urlgetBusStopstring).pipe(map(data => data = data.payload));
  }
  getEmployee(): Observable<IEMPLOYEE[]> {
    return this.http.get<IEMPLOYEE[]>(this.urlgetEmployeeString).pipe(map(data => data = data.payload));
  }
  getPassGeneration(): Observable<IPASSGENERATION[]> {
    return this.http.get<IPASSGENERATION[]>(this.urlgetPassGeneration).pipe(map(data => data = data.payload));
  }
  getPassRegistartion(): Observable<IPASSREGISTRATION[]> {
    return this.http.get<IPASSREGISTRATION[]>(this.urlgetPassRegistration).pipe(map(data => data = data.payload));
  }
  getRequest(): Observable<IREQUEST[]> {
    return this.http.get<IREQUEST[]>(this.getrequest).pipe(map(data => data = data.payload));
  }
  getRouteInformation(): Observable<IROUTEINFORMATION[]> {
    return this.http.get<IROUTEINFORMATION[]>(this.getRouteInformationn).pipe(map(data => data = data.payload));
  }
  getVehicle(): Observable<IVEHICLEINFORMATION[]> {
    return this.http.get<IVEHICLEINFORMATION[]>(this.getVehicleInformation).pipe(map(data => data = data.payload));
  }
  getVerificationn(): Observable<IVERIFICATION[]> {
    return this.http.get<IVERIFICATION[]>(this.getVerification).pipe(map(data => data = data.payload));
  }
}