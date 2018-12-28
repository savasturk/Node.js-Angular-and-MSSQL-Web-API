import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { IROUTEINFORMATION } from '../../../../../shared_modules/models/route-information';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-route-information',
  templateUrl: './route-information.component.html',
  styleUrls: ['./route-information.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]

})
export class RouteInformationComponent implements OnInit {

  routeInformationForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  routeNo = '';
  routeNos = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private getService: GetService,
    private insertService: InsertService,
    private updateService: UpdateService,
    private getByService: GetByService,
    private deleteService: DeleteService,
    private route: ActivatedRoute


  ) { }

  ngOnInit() {
    this.routeInformationForm = this.formBuilder.group({
      RouteNo: ['', Validators.required] ,
      RouteName: ['', Validators.required] 
    });
  }
  get f() { return this.routeInformationForm.controls; }

  onSubmit() {
    if (this.getAllButtonClicked) {

      // call service
      this.getService.getRouteInformation()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get employeeses...");
            
            data.forEach(datum => {
              this.routeNos += ' ' + datum.RouteNo + ' ' + datum.RouteName;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let routeinformation: IROUTEINFORMATION = {
        RouteNo: parseInt(this.routeInformationForm.value.RouteNo)
      }

            // call service
            this.getByService.getRouteInformation(routeinformation)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get employee...");
                
                this.routeNo += ' ' + data[0].RouteNo + ' ' + data[0].RouteName;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let routeinformation: IROUTEINFORMATION = {
        RouteNo: parseInt(this.routeInformationForm.value.RouteNo)
      }

        // call service
        this.updateService.updateRouteInformation(routeinformation)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, update employee...");

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.updateButtonCLicked = false;

    } else if (this.deleteButtonClicked) {

      let routeinformation: IROUTEINFORMATION = {
        RouteNo: parseInt(this.routeInformationForm.value.RouteNo)
      }

        // call service
        this.deleteService.deleteRouteInformation(routeinformation)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, delete employee...");
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.deleteButtonClicked = false;
    } else if (this.insertButtonClicked) {

          let routeinformation: IROUTEINFORMATION = {
            RouteNo: parseInt(this.routeInformationForm.value.RouteNo)
          }

            // call service
            this.insertService.insertRouteInformation(routeinformation)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, insert employee...");
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.insertButtonClicked = false;

    }

    this.submitted = true;
    this.loading = true;


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
