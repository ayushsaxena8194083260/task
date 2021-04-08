import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component  {
  name = 'Angular';
  array=[]
  productForm: FormGroup;
   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({      
      phoneNumber: this.fb.array([]) ,
    });
  }
  
  phoneNumber() : FormArray {
    return this.productForm.get("phoneNumber") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      phoneNumber: '',
    })
  }
   
  addQuantity() {
    this.phoneNumber().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.phoneNumber().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
     this.array = this.productForm.value.phoneNumber
  }
}
