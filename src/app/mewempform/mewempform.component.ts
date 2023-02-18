import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../mewemploye/newemp.service';
import { CoreService } from '../mewemploye/core.services';

@Component({
  selector: 'app-mewempform',
  templateUrl: './mewempform.component.html',
  styleUrls: ['./mewempform.component.scss']
})
export class MewempformComponent implements OnInit {
  empForm: FormGroup;

  education: string[] = [
    'UI DESIGNER',
    'GRAPHIC DESIGNER',
    'BACKEND DEVELOPER',
    'DIGITAL MARKETING',
    'FRONT-END DEVELOPER',
  ];
  company:string[]=[
    'Kasper Infotech pvt ltd',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<MewempformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
