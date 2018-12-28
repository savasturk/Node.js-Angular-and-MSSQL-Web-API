import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IBUS } from '../../../../../shared_modules/models/bus';
import { Observable } from 'rxjs';
import { IEMPLOYEE } from '../../../../../shared_modules/models/employee';
import { IPASSGENERATION } from '../../../../../shared_modules/models/pass-generation';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';
import { IREQUEST } from '../../../../../shared_modules/models/request';
import { IROUTEINFORMATION } from '../../../../../shared_modules/models/route-information';
import { IVEHICLEINFORMATION } from '../../../../../shared_modules/models/vehicle-information';
import { IVERIFICATION } from '../../../../../shared_modules/models/verification';
import { IBUSSTOPS } from '../../../../../shared_modules/models/bus-stops';


@Injectable()
export class GetByService {
  constructor(private http: HttpClient) { }

  urlgetBusByString = 'http://127.0.0.1:8080/api/getBus/';
  urlgetBusStopByString = 'http://127.0.0.1:8080/api/getBusStop/';
  urlgetEmployeeString = 'http://127.0.0.1:8080/api/getEmployee/';
  urlgetPassGeneration = 'http://127.0.0.1:8080/api/getPassGeneration/';
  urlgetPassRegistration = 'http://127.0.0.1:8080/api/getPassRegistration/';
  getrequest = 'http://127.0.0.1:8080/api/getRequest/';
  getRouteInformationn = 'http://127.0.0.1:8080/api/getRouteInformation/';
  getVehicleInformation = 'http://127.0.0.1:8080/api/getVehicleInformation/';
  getVerification = 'http://127.0.0.1:8080/api/getVerification/';

  getBus(bus: IBUS): Observable<IBUS> {
    return this.http.get<IBUS>(this.urlgetBusByString + bus.BusID).pipe(map(data => data = data.payload));
  }
  getBusStops(busStop: IBUSSTOPS): Observable<IBUSSTOPS[]> {
    return this.http.get<IBUSSTOPS>(this.urlgetBusStopByString + busStop.StopID).pipe(map(data => data = data.payload));
  }
  getEmployee(employee: IEMPLOYEE): Observable<IEMPLOYEE[]> {
    return this.http.get<IEMPLOYEE>(this.urlgetEmployeeString + employee.SSN).pipe(map(data => data = data.payload));
  }
  getPassGeneration(passGeneration: IPASSGENERATION) {
    return this.http.get<IPASSGENERATION>(this.urlgetPassGeneration + passGeneration.PassGenerationID).pipe(map(data => data = data.payload));
  }
  getPassRegistartion(passRegistration: IPASSREGISTRATION) {
    return this.http.get<IPASSREGISTRATION>(this.urlgetPassRegistration + passRegistration.RegistrationID).pipe(map(data => data = data.payload));
  }
  getRequest(request: IREQUEST) {
    return this.http.get<IREQUEST>(this.getrequest + request.RequestID).pipe(map(data => data = data.payload));
  }
  getRouteInformation(routeInformation: IROUTEINFORMATION) {
    return this.http.get<IROUTEINFORMATION>(this.getRouteInformationn + routeInformation.RouteNo).pipe(map(data => data = data.payload));
  }
  getVehicle(vehicleInformation: IVEHICLEINFORMATION) {
    return this.http.get<IVERIFICATION>(this.getVehicleInformation + vehicleInformation.VehicleID).pipe(map(data => data = data.payload));
  }
  getVerificationn(verification: IVERIFICATION) {
    return this.http.get<IVERIFICATION>(this.getVerification + verification.UserID).pipe(map(data => data = data.payload));
  }
}