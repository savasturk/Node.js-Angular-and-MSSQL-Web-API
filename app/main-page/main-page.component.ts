import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mainPageForm: FormGroup;
  submitted = false;
  loading = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    

  ) { }

  ngOnInit() {
    this.mainPageForm = this.formBuilder.group({
    });
  }
  onSubmit() {
    this.submitted = true;
   // this.router.navigate(['bus']);
  }
  goToBusPage() {
    this.router.navigate(['/bus']);
  }
  goToBusStopPage() {
    this.router.navigate(['/bus-stops']);
  }
  goToEmployeePage() {
    this.router.navigate(['/employee']);
  }
  goToPassGenerationPage() {
    this.router.navigate(['/pass-generation']);
  }
  goToPassRegistrationPage() {
    this.router.navigate(['/pass-registration']);
  }
  goToRequestPage() {
    this.router.navigate(['/request']);
  }
  goToRouteInformationPage() {
    this.router.navigate(['/route-information']);
  }
  goToVehicleInformationPage() {
    this.router.navigate(['/vehicle-information']);
  }
  goToVerificationPage() {
    this.router.navigate(['/verification']);
  }
}
