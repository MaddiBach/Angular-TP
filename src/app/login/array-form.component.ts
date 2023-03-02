import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css'],
})
export class ArrayFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  myForm: FormGroup | any;

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        email: '',
        phones: this.fb.array([]),
      },
      { updateOn: 'blur' }
    );
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i: any) {
    this.phoneForms.removeAt(i);
  }
}
