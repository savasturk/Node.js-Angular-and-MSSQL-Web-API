import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { GetService } from '../services/get.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { GetByService } from '../services/get-by.service';
import { DeleteService } from '../services/delete.service';
import { IPASSREGISTRATION } from '../../../../../shared_modules/models/pass-registration';



@Component({templateUrl: 'register.component.html',
providers: [AlertService, GetService, InsertService, UpdateService, GetByService, DeleteService]


})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    insertButtonClicked = false;
    getAllButtonClicked = false;
    deleteButtonClicked = false;
    updateButtonCLicked = false;
    getByIdButtonClicked = false;
    returnAllValuesString = ' ';
    loading: boolean;
    registerID = '';
    registerIDs = '';
  

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private getService: GetService,
        private insertService: InsertService,
        private updateService: UpdateService,
        private getByService: GetByService,
        private deleteService: DeleteService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            UserID: ['', Validators.required],
            Password: ['', Validators.required],
            Birthdate: ['', Validators.required],
            Address: ['',Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}