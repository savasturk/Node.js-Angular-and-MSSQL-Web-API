import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IBUS } from '../../../../../shared_modules/models/bus';
import { IBUSSTOPS } from '../../../../../shared_modules/models/bus-stops';
import { IEMPLOYEE } from '../../../../../shared_modules/models/employee';
import { IPASSGENERATION } from '../../../../../shared_modules/models/pass-generation';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';
import { IREQUEST } from '../../../../../shared_modules/models/request';
import { IROUTEINFORMATION } from '../../../../../shared_modules/models/route-information';
import { IVEHICLEINFORMATION } from '../../../../../shared_modules/models/vehicle-information';
import { IVERIFICATION } from '../../../../../shared_modules/models/verification';



import { Observable } from 'rxjs';

@Injectable()
export class InsertService {
  constructor(private http: HttpClient) { }

  urlinsertBussString = 'http://127.0.0.1:8080/api/insertBus/';
  urlinsertBusStopsString = 'http://127.0.0.1:8080/api/insertBusStop/';
  urlinsertEmployeeString = 'http://127.0.0.1:8080/api/insertEmployee/';
  urlinsertPassGeneration ='http://127.0.0.1:8080/api/insertPassGenerations/';
  urlinsertPassRegistration = 'http://127.0.0.1:8080/api/insertPassRegistrations/';
  insertrequest = 'http://127.0.0.1:8080/api/insertRequests/';
  insertRouteInformationn = 'http://127.0.0.1:8080/api/insertRouteInformation/';
  inserVehicleInformation = 'http://127.0.0.1:8080/api/insertVehicleInformation/';
  insertVerification = 'http://127.0.0.1:8080/api/insertVerifications/';

  insertBus(bus: IBUS) {
    return this.http.post(this.urlinsertBussString, bus);
  }
  insertBusStops(busstop: IBUSSTOPS) {
    return this.http.post(this.urlinsertBusStopsString, busstop);
  }

  insertEmployee(employee: IEMPLOYEE) {
    return this.http.post(this.urlinsertEmployeeString, employee);
  }

  insertPassGeneration(passgeneration: IPASSGENERATION) {
    return this.http.post(this.urlinsertPassGeneration, passgeneration);
  }

  insertPassRegistration(passregistration: IPASSREGISTRATION) {
    return this.http.post(this.urlinsertPassRegistration, passregistration);
  }

  insertRequest(request: IREQUEST) {
    return this.http.post(this.insertrequest, request);
  }

  insertRouteInformation(routeinformation: IROUTEINFORMATION) {
    return this.http.post(this.insertRouteInformationn, routeinformation);
  }

  insertVehicleinformation(vehicleinformation: IVEHICLEINFORMATION) {
    return this.http.post(this.inserVehicleInformation, vehicleinformation);
  }

  insertVerificationn(verification: IVERIFICATION) {
    return this.http.post(this.insertVerification, verification);
  }
}