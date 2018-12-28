import { Injectable } from '@angular/core';
import { IBUS } from '../../../../../shared_modules/models/bus';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IEMPLOYEE } from '../../../../../shared_modules/models/employee';
import { IPASSGENERATION } from '../../../../../shared_modules/models/pass-generation';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';
import { IREQUEST } from '../../../../../shared_modules/models/request';
import { IROUTEINFORMATION } from '../../../../../shared_modules/models/route-information';
import { IVEHICLEINFORMATION } from '../../../../../shared_modules/models/vehicle-information';
import { IVERIFICATION } from '../../../../../shared_modules/models/verification';
import { IBUSSTOPS } from '../../../../../shared_modules/models/bus-stops';


@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  urlgetBussesString = 'http://127.0.0.1:8080/api/deleteBus/';
  urlgetBusStopByString = 'http://127.0.0.1:8080/api/deleteBusStop/';
  urlgetEmployeeString = 'http://127.0.0.1:8080/api/deleteEmployee/';
  urlgetPassGeneration = 'http://127.0.0.1:8080/api/deletePassGenerations/';
  urlgetPassRegistration = 'http://127.0.0.1:8080/api/deletePassRegistrations/';
  getrequest = 'http://127.0.0.1:8080/api/deleteRequests/';
  getRouteInformationn = 'http://127.0.0.1:8080/api/deleteRouteInformation/';
  getVehicleInformation = 'http://127.0.0.1:8080/api/deleteVehicleInformation/';
  getVerification = 'http://127.0.0.1:8080/api/deleteVerifications/';

  deleteBus(bus: IBUS): any {
    return this.http.delete(this.urlgetBussesString + bus.BusID);
  }
  deleteBusStops(busStop: IBUSSTOPS) {
    return this.http.delete(this.urlgetBusStopByString + busStop.StopID);
  }
  deleteEmployee(employee: IEMPLOYEE){
    return this.http.delete(this.urlgetEmployeeString + employee.SSN);
  }
  deletePassGeneration(passGeneration: IPASSGENERATION) {
    return this.http.delete(this.urlgetPassGeneration + passGeneration.PassGenerationID);
  }
  deletePassRegistartion(passRegistration: IPASSREGISTRATION) {
    return this.http.delete(this.urlgetPassRegistration + passRegistration.RegistrationID);
  }
  deleteRequest(request: IREQUEST) {
    return this.http.delete(this.getrequest + request.RequestID);
  }
  deleteRouteInformation(routeInformation: IROUTEINFORMATION) {
    return this.http.delete(this.getRouteInformationn + routeInformation.RouteNo);
  }
  deleteVehicle(vehicleInformation: IVEHICLEINFORMATION) {
    return this.http.delete(this.getVehicleInformation + vehicleInformation.VehicleID);
  }
  deleteVerificationn(verification: IVERIFICATION) {
    return this.http.delete(this.getVerification + verification.UserID);
  }
}
