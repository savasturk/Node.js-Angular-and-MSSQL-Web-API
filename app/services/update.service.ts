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
export class UpdateService {
  constructor(private http: HttpClient) { }

  urlupdateBussString = 'http://127.0.0.1:8080/api/updateBus';
  urlupdateBusStopsString = 'http://127.0.0.1:8080/api/updateBusStop/';
  urlupdateEmployeeString = 'http://127.0.0.1:8080/api/updateEmployee/';
  urlupdatePassGeneration ='http://127.0.0.1:8080/api/updatePassGenerations/';
  urlupdatePassRegistration = 'http://127.0.0.1:8080/api/updatePassRegistrations/';
  updaterequest = 'http://127.0.0.1:8080/api/updateRequests/';
  updateRouteInformationn = 'http://127.0.0.1:8080/api/updateRouteInformation/';
  updateVehicleInformation = 'http://127.0.0.1:8080/api/updateVehicleInformation/';
  updateVerification = 'http://127.0.0.1:8080/api/updateVerifications/';

  updateBus(bus: IBUS) {

    return this.http.put(this.urlupdateBussString, bus);
  }
  updateBusStops(busstop: IBUSSTOPS) {
    return this.http.put(this.urlupdateBusStopsString, busstop);
  }

  updateEmployee(employee: IEMPLOYEE) {
    return this.http.put(this.urlupdateEmployeeString, employee);
  }

  updatePassGeneration(passgeneration: IPASSGENERATION) {
    return this.http.put(this.urlupdatePassGeneration, passgeneration);
  }

  updatePassRegistration(passregistration: IPASSREGISTRATION) {
    return this.http.put(this.urlupdatePassRegistration, passregistration);
  }

  updateRequest(request: IREQUEST) {
    return this.http.put(this.updaterequest, request);
  }

  updateRouteInformation(routeinformation: IROUTEINFORMATION) {
    return this.http.put(this.updateRouteInformationn, routeinformation);
  }

  updateVehicleinformation(vehicleinformation: IVEHICLEINFORMATION) {
    return this.http.put(this.updateVehicleInformation, vehicleinformation);
  }

  updateVerificationn(verification: IVERIFICATION) {
    return this.http.put(this.updateVerification, verification);
  }
}