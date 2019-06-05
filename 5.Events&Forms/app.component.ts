import { Component } from '@angular/core';
import { Product } from './product';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  getArray(): string[] {
    return ['one','two','three'];
  }
  selected2 = 'none';
  setSelected(i: string) {
    this.selected2 = i;
  }
  newProduct: Product = new Product();
  newProduct2: Product = new Product();
  newProduct3: Product = new Product();
  newProduct4: Product = new Product();
  newProduct5: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log(p);
  }
  getValidationMessages(state: any) {
    let messages: string[] = [];
    if (state.errors) {
       for (let errorName in state.errors) {
       switch (errorName) {
         case "required":
           messages.push('name is required');
           break;
         case "minlength":
           messages.push(`min length is ${state.errors['minlength'].requiredLength}`);
           break;
         case "pattern":
           messages.push(`only letters`);
           break;
         }
       }
    }
    return messages;
  }
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct5);
      this.newProduct5 = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
  getFormValidationMessages(form: NgForm): string[] {
   let messages: string[] = [];
   Object.keys(form.controls).forEach(k => {
     this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
   });
   return messages;
  }
}
