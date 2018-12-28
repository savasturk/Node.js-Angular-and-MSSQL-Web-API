import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';
import { IPASSGENERATION } from '../../../../../shared_modules/models/pass-generation';

@Component({
  selector: 'app-pass-generation',
  templateUrl: './pass-generation.component.html',
  styleUrls: ['./pass-generation.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]
})
export class PassGenerationComponent implements OnInit {

  passGenerationForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  passGenerationId = '';
  passGenerationIds = '';

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
    this.passGenerationForm = this.formBuilder.group({
      PassGenerationID: ['', Validators.required] ,
      DistanceBetween: ['', Validators.required] ,
      Cost: ['', Validators.required] ,
      RegistrationID: ['', Validators.required]
    });
  }
  get f() { return this.passGenerationForm.controls; }

  onSubmit() {

    if (this.getAllButtonClicked) {

      // call service
      this.getService.getPassGeneration()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get passGenerationses...");
            
            data.forEach(datum => {
              this.passGenerationIds += ' ' + datum.PassGenerationID + ' '+ datum.DistanceBetween +  ' ' + datum.Cost + ' ' + datum.RegistrationID;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let passGeneration: IPASSGENERATION = {
        PassGenerationID: parseInt(this.passGenerationForm.value.PassGenerationID)
      }

            // call service
            this.getByService.getPassGeneration(passGeneration)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get passGeneration...");
                
                this.passGenerationId += ' ' + data[0].PassGenerationID + ' ' + data[0].DistanceBetween + ' ' + data[0].Cost + ' ' + data[0].RegistrationID;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let passGeneration: IPASSGENERATION = {
        PassGenerationID: parseInt(this.passGenerationForm.value.PassGenerationID),
        DistanceBetween: parseInt(this.passGenerationForm.value.DistanceBetween),
        Cost: parseInt(this.passGenerationForm.value.Cost),
        RegistrationID: parseInt(this.passGenerationForm.value.RegistrationID)

      }

        // call service
        this.updateService.updatePassGeneration(passGeneration)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, update passGeneration...");

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.updateButtonCLicked = false;

    } else if (this.deleteButtonClicked) {

      let passGeneration: IPASSGENERATION = {
        PassGenerationID: parseInt(this.passGenerationForm.value.PassGenerationID)
      }

        // call service
        this.deleteService.deletePassGeneration(passGeneration)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, delete passGeneration...");
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.deleteButtonClicked = false;
    } else if (this.insertButtonClicked) {

          let passGeneration: IPASSGENERATION = {
            PassGenerationID: parseInt(this.passGenerationForm.value.PassGenerationID),
            DistanceBetween: parseInt(this.passGenerationForm.value.DistanceBetween),
            Cost: parseInt(this.passGenerationForm.value.Cost),
            RegistrationID: parseInt(this.passGenerationForm.value.RegistrationID)
              }

            // call service
            this.insertService.insertPassGeneration(passGeneration)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, insert passGeneration...");
    
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
