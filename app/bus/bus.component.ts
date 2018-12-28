import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetService } from '../services/get.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { InsertService } from '../services/insert.service';
import { IBUS } from '../../../../../shared_modules/models/bus';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]
})
export class BusComponent implements OnInit {
  busForm: FormGroup;
  submitted = false;
  loading = false;
  loginForm: FormGroup;
  returnUrl: string;
  busId = '';
  busIds = '';
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;

  constructor(
    private formBuilder: FormBuilder,
    private getService: GetService,
    private insertService : InsertService,
    private updateService : UpdateService,
    private getByService : GetByService,
    private deleteService: DeleteService,
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.busForm = this.formBuilder.group({
      BusID: ['', Validators.required]
    });

    // reset login status

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f() { return this.busForm.controls; }


  onSubmit() {

    if (this.getAllButtonClicked) {

      // call service
      this.getService.getBusses()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get busses...");
            
            data.forEach(datum => {
              this.busIds += ' ' + datum.BusID;
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let bus: IBUS = {
        BusID: parseInt(this.busForm.value.BusID)
      }

            // call service
            this.getByService.getBus(bus)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get bus...");
                
                this.busId += ' ' + data[0].BusID;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getAllButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let bus: IBUS = {
        BusID: parseInt(this.busForm.value.BusID)
      }

        // call service
        this.updateService.updateBus(bus)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, update bus...");

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.updateButtonCLicked = false;

    } else if (this.deleteButtonClicked) {

      let bus: IBUS = {
        BusID: parseInt(this.busForm.value.BusID)
      }

        // call service
        this.deleteService.deleteBus(bus)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, delete bus...");
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;
    } else if (this.insertButtonClicked) {

          let bus: IBUS = {
            BusID: parseInt(this.busForm.value.BusID)
          }

            // call service
            this.insertService.insertBus(bus)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, insert bus...");
    
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
