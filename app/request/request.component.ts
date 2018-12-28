import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { IREQUEST } from '../../../../../shared_modules/models/request';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]

})
export class RequestComponent implements OnInit {

  requestForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  requestID = '';
  requestIDs = '';



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    //private userService: UserService,
    private alertService: AlertService,
    private getService: GetService,
    private insertService: InsertService,
    private updateService: UpdateService,
    private getByService: GetByService,
    private deleteService: DeleteService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      RequestID: ['', Validators.required] ,
      RequestType: ['', Validators.required] 
    });
  }
  get f() { return this.requestForm.controls; }

  onSubmit() {
    if (this.getAllButtonClicked) {

      // call service
      this.getService.getRequest()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get employeeses...");
            
            data.forEach(datum => {
              this.requestIDs += ' ' + datum.RequestID + ' ' + datum.RequestType;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let request: IREQUEST = {
        RequestID: parseInt(this.requestForm.value.RequestID),
      }
            // call service
            this.getByService.getRequest(request)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get employee...");
                
                this.requestID += ' ' + data[0].RequestID + ' ' + data[0].RequestType;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let request: IREQUEST = {
        RequestID: parseInt(this.requestForm.value.RequestID),
        RequestType: String(this.requestForm.value.RequestType)
      }

        // call service
        this.updateService.updateRequest(request)
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

      let request: IREQUEST = {
        RequestID: parseInt(this.requestForm.value.RequestID)
      }

        // call service
        this.deleteService.deleteRequest(request)
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

          let request: IREQUEST = {
            RequestID: parseInt(this.requestForm.value.RequestID),
            RequestType: String(this.requestForm.value.RequestType)          }

            // call service
            this.insertService.insertRequest(request)
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
