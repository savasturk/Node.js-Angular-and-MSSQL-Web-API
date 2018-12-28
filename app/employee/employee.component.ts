import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { IEMPLOYEE } from '../../../../../shared_modules/models/employee';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  insertButtonClicked = false;
  getAllButtonClicked = false;
  deleteButtonClicked = false;
  updateButtonCLicked = false;
  getByIdButtonClicked = false;
  returnAllValuesString = ' ';
  loading: boolean;
  SSN = '';
  SSNs = '';


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
    this.employeeForm = this.formBuilder.group({
      FName: ['', Validators.required] ,
      MName: ['', Validators.required] ,
      LName: ['', Validators.required] ,
      Salary: ['', Validators.required] ,
      SSN: ['', Validators.required] 
    });
  }
  get f() { return this.employeeForm.controls; }

  onSubmit() {

    if (this.getAllButtonClicked) {

      // call service
      this.getService.getEmployee()
        .pipe(first())
        .subscribe(
          data => {
            console.log("Successfull, get employeeses...");
            
            data.forEach(datum => {
              this.SSNs += '   ' + datum.SSN + '    ' + datum.FName + datum.MName + '    ' 
              + datum.LName + '    ' + datum.Salary + '    :';
            });

          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

      this.getAllButtonClicked = false;

    } else if (this.getByIdButtonClicked) {

      let employee: IEMPLOYEE = {
        SSN: parseInt(this.employeeForm.value.SSN)
      }

            // call service
            this.getByService.getEmployee(employee)
            .pipe(first())
            .subscribe(
              data => {
                console.log("Successfull, get employee...");
                
                this.SSN += ' ' + data[0].SSN + ' ' + data[0].FName + ' ' +data[0].MName + ' ' + data[0].LName + ' ' + data[0].Salary;
    
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    
          this.getByIdButtonClicked = false;
    

    } else if (this.updateButtonCLicked) {

      let employee: IEMPLOYEE = {
        FName: String(this.employeeForm.value.FName),
        MName: String(this.employeeForm.value.MName),
        LName: String(this.employeeForm.value.LName),
        Salary: parseInt(this.employeeForm.value.Salary),
        SSN: parseInt(this.employeeForm.value.SSN)
      }

        // call service
        this.updateService.updateEmployee(employee)
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

      let employee: IEMPLOYEE = {
        SSN: parseInt(this.employeeForm.value.SSN)
      }

        // call service
        this.deleteService.deleteEmployee(employee)
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

          let employee: IEMPLOYEE = {
            FName: String(this.employeeForm.value.FName),
            MName: String(this.employeeForm.value.MName),
            LName: String(this.employeeForm.value.LName),
            Salary: parseInt(this.employeeForm.value.Salary),
            SSN: parseInt(this.employeeForm.value.SSN)
          }

            // call service
            this.insertService.insertEmployee(employee)
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
