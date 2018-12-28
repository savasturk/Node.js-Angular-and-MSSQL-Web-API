import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { first } from 'rxjs/operators';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass-registration',
  templateUrl: './pass-registration.component.html',
  styleUrls: ['./pass-registration.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]
})
export class PassRegistrationComponent implements OnInit {

  passRegistrationForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  registartionId = '';
  registartionIds = '';

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
    this.passRegistrationForm = this.formBuilder.group({
      FromRegistration: ['', Validators.required] ,
      ToRegistration: ['', Validators.required] ,
      RegistrationID: ['', Validators.required] ,
      UserID: ['', Validators.required],
      DistanceBetween: ['', Validators.required]  
    });

  }
  get f() { return this.passRegistrationForm.controls; }

  onSubmit() {

    if (this.getAllButtonClicked) {

      // call service
      this.getService.getPassRegistartion()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get passRegistrationses...");
            
            data.forEach(datum => {
              this.registartionIds += ' ' + datum.FromRegistration + ' ' + datum.ToRegistration + 
              ' ' + datum.RegistrationID + ' ' + datum.UserID + ' ' + datum.DistanceBetween;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let passRegistration: IPASSREGISTRATION = {
        RegistrationID: parseInt(this.passRegistrationForm.value.RegistrationID)
      }

            // call service
            this.getByService.getPassRegistartion(passRegistration)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get passRegistration...");
                
                this.registartionId += ' ' + data[0].FromRegistration + ' ' + data[0].ToRegistration +
                ' ' + data[0].RegistrationID +  ' ' + data[0].UserID +  ' ' + data[0].DistanceBetween ;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let passRegistration: IPASSREGISTRATION = {
        FromRegistration: String(this.passRegistrationForm.value.FromRegistration),
        ToRegistration: String(this.passRegistrationForm.value.ToRegistration),
        RegistrationID: parseInt(this.passRegistrationForm.value.RegistrationID),
        UserID: parseInt(this.passRegistrationForm.value.UserID),
        DistanceBetween: parseInt(this.passRegistrationForm.value.DistanceBetween)

      }

        // call service
        this.updateService.updatePassRegistration(passRegistration)
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

      let passRegistration: IPASSREGISTRATION = {
        RegistrationID: parseInt(this.passRegistrationForm.value.RegistrationID)
      }

        // call service
        this.deleteService.deletePassRegistartion(passRegistration)
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

          let passRegistration: IPASSREGISTRATION = {
            FromRegistration: String(this.passRegistrationForm.value.FromRegistration),
            ToRegistration: String(this.passRegistrationForm.value.ToRegistration),
            RegistrationID: parseInt(this.passRegistrationForm.value.RegistrationID),
            UserID: parseInt(this.passRegistrationForm.value.UserID),
            DistanceBetween: parseInt(this.passRegistrationForm.value.DistanceBetween)
          }

            // call service
            this.insertService.insertPassRegistration(passRegistration)
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
