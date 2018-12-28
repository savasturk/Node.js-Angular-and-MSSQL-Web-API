import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';
import { IVEHICLEINFORMATION } from '../../../../../shared_modules/models/vehicle-information';


@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]

})
export class VehicleInformationComponent implements OnInit {

  vehicleInformationForm: FormGroup;
  submitted = false;
  passRegistrationForm: FormGroup;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  vehicleId = '';
  vehicleIds = '';

  constructor(
    private formBuilder: FormBuilder,
    private getService: GetService,
    private insertService: InsertService,
    private updateService: UpdateService,
    private getByService: GetByService,
    private deleteService: DeleteService,
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.vehicleInformationForm = this.formBuilder.group({
      VehicleName: ['', Validators.required] ,
      VehicleID: ['', Validators.required] ,
      VehicleType: ['', Validators.required] 
    });
  }
  get f() { return this.vehicleInformationForm.controls; }

  onSubmit() {

    if (this.getAllButtonClicked) {

      // call service
      this.getService.getVehicle()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get passRegistrationses...");
            
            data.forEach(datum => {
              this.vehicleIds += ' ' + datum.VehicleName + ' ' + datum.VehicleID + 
              ' ' + datum.VehicleType;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let vehicle: IVEHICLEINFORMATION = {
        VehicleID: parseInt(this.vehicleInformationForm.value.VehicleID)
      }

            // call service
            this.getByService.getVehicle(vehicle)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get passRegistration...");
                
                this.vehicleId += ' ' + data[0].VehicleName + ' ' + data[0].VehicleID +
                ' ' + data[0].VehicleType ;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let vehicle: IVEHICLEINFORMATION = {
        VehicleName: String(this.vehicleInformationForm.value.VehicleName),
        VehicleID: parseInt(this.vehicleInformationForm.value.VehicleID),
        VehicleType: String(this.vehicleInformationForm.value.VehicleType)


      }

        // call service
        this.updateService.updateVehicleinformation(vehicle)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, update passRegistration...");

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.updateButtonCLicked = false;

    } else if (this.deleteButtonClicked) {

      let vehicle: IVEHICLEINFORMATION = {
        VehicleID: parseInt(this.vehicleInformationForm.value.VehicleID)
      }

        // call service
        this.deleteService.deleteVehicle(vehicle)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, delete passRegistration...");
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.deleteButtonClicked = false;
    } else if (this.insertButtonClicked) {

          let vehicle: IVEHICLEINFORMATION = {
            VehicleName: String(this.vehicleInformationForm.value.VehicleName),
            VehicleID: parseInt(this.vehicleInformationForm.value.VehicleID),
            VehicleType: String(this.vehicleInformationForm.value.VehicleType)
    
    
          }
            // call service
            this.insertService.insertVehicleinformation(vehicle)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, insert passRegistration...");
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.insertButtonClicked = false;

    }
    this.submitted = true;

  }
  insertButtonFunction() {
    this.insertButtonClicked = true;
  }

  getAllButtonFunction() {
    this.getAllButtonClicked = true;
  }

  getByIdButtonFunction() {
    this.getByIdButtonClicked = true;
  }

  deleteButtonFunction() {
    this.deleteButtonClicked = true;
  }

  updateButtonFunction() {
    this.updateButtonCLicked = true;
  }

}
