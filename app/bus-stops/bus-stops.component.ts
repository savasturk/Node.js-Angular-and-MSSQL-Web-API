import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { IBUSSTOPS } from '../../../../../shared_modules/models/bus-stops';


@Component({
  selector: 'app-bus-stops',
  templateUrl: './bus-stops.component.html',
  styleUrls: ['./bus-stops.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]
})
export class BusStopsComponent implements OnInit {
  busStopsForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  busStopId = '';

  constructor(
    private formBuilder: FormBuilder,
    private getService: GetService,
    private insertService: InsertService,
    private updateService: UpdateService,
    private getByService: GetByService,
    private deleteService: DeleteService,
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.busStopsForm = this.formBuilder.group({
      LatitudeDegree: ['', Validators.required],
      LatitudeMinute: ['', Validators.required],
      LatitudeSecond: ['', Validators.required],
      LongitudeDegree: ['', Validators.required],
      LongitudeMinute: ['', Validators.required],
      LongitudeSecond: ['', Validators.required],
      StopName: ['', Validators.required],
      StopID: ['', Validators.required]
    }
    );
  }
  get f() { return this.busStopsForm.controls; }

  onSubmit() {

    if (this.getAllButtonClicked) {

      // call service
      this.getService.getBusStops()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get bus-stops...");

            data.forEach(datum => {
              this.returnAllValuesString += ' ' + datum.LatitudeDegree + ' ' + datum.LatitudeMinute + ' ' + datum.LatitudeSecond +
                ' ' + datum.LongitudeDegree + ' ' + datum.LongitudeMinute + ' ' + datum.LongitudeSecond + ' ' +
                datum.StopID + ' ' + datum.StopName + "\n";
            });
            console.log(this.returnAllValuesString);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let busStop: IBUSSTOPS = {
        StopID: parseInt(this.busStopsForm.value.StopID)
      }

      // call service
      this.getByService.getBusStops(busStop)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get bus...");

            this.busStopId += ' ' + data[0].StopID + ' ' + data[0].StopName;

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;


    } else if (this.updateButtonCLicked) {

      let busStop: IBUSSTOPS = {
        LatitudeDegree: parseInt(this.busStopsForm.value.LatitudeDegree),
        LatitudeMinute: parseInt(this.busStopsForm.value.LatitudeMinute),
        LatitudeSecond: parseInt(this.busStopsForm.value.LatitudeSecond),
        LongitudeDegree: parseInt(this.busStopsForm.value.LongitudeDegree),
        LongitudeMinute: parseInt(this.busStopsForm.value.LongitudeMinute),
        LongitudeSecond: parseInt(this.busStopsForm.value.LongitudeSecond),
        StopID: parseInt(this.busStopsForm.value.StopID),
        StopName: String(this.busStopsForm.value.StopName),      }

      // call service
      this.updateService.updateBusStops(busStop)
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

      let busStop: IBUSSTOPS = {
        StopID: parseInt(this.busStopsForm.value.StopID)
      }

      // call service
      this.deleteService.deleteBusStops(busStop)
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

      let busStops: IBUSSTOPS = {
        LatitudeDegree: parseInt(this.busStopsForm.value.LatitudeDegree),
        LatitudeMinute: parseInt(this.busStopsForm.value.LatitudeMinute),
        LatitudeSecond: parseInt(this.busStopsForm.value.LatitudeSecond),
        LongitudeDegree: parseInt(this.busStopsForm.value.LongitudeDegree),
        LongitudeMinute: parseInt(this.busStopsForm.value.LongitudeMinute),
        LongitudeSecond: parseInt(this.busStopsForm.value.LongitudeSecond),
        StopID: parseInt(this.busStopsForm.value.StopID),
        StopName: String(this.busStopsForm.value.StopName),

      }

      // call service
      this.insertService.insertBusStops(busStops)
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
