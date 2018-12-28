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
import { IVERIFICATION } from '../../../../../shared_modules/models/verification';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]

})
export class VerificationComponent implements OnInit {
  verificationForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  verificationId = '';
  verificationIds = '';



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

    this.verificationForm = this.formBuilder.group({
      UserID: ['', Validators.required] ,
      RegistrationID: ['', Validators.required]
    });
  }
  get f() { return this.verificationForm.controls; }

  onSubmit() {

    
    if (this.getAllButtonClicked) {

      // call service
      this.getService.getVerificationn()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get passRegistrationses...");
            
            data.forEach(datum => {
              this.verificationIds += ' ' + datum.UserID + ' ' + datum.RegistrationID;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let verification: IVERIFICATION = {
        UserID: parseInt(this.verificationForm.value.UserID),
        RegistrationID: parseInt(this.verificationForm.value.RegistrationID)
      }

            // call service
            this.getByService.getVerificationn(verification)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get passRegistration...");
                
                this.verificationId += ' ' + data[0].UserID + ' ' + data[0].RegistrationID;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {
      let verification: IVERIFICATION = {
        UserID: parseInt(this.verificationForm.value.UserID),
        RegistrationID: parseInt(this.verificationForm.value.RegistrationID)
      }


        // call service
        this.updateService.updateVerificationn(verification)
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

      let verification: IVERIFICATION = {
        UserID: parseInt(this.verificationForm.value.UserID),
      }


        // call service
        this.deleteService.deleteVerificationn(verification)
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

      let verification: IVERIFICATION = {
        UserID: parseInt(this.verificationForm.value.UserID),
        RegistrationID: parseInt(this.verificationForm.value.RegistrationID)
      }

            // call service
            this.insertService.insertVerificationn(verification)
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
