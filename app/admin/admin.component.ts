import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.adminForm = this.formBuilder.group({
      AdminName: ['', Validators.required] ,
      AdminID: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

  }

}
