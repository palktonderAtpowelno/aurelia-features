import {computedFrom} from 'aurelia-framework';
import {inject, NewInstance} from 'aurelia-framework';  
import {ValidationController} from 'aurelia-validation';
import {required, email} from 'aurelia-validatejs';
import {validateTrigger} from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class WelcomeValidation {
  heading = 'Welcome to Aurelia!';
  @required firstName = '';
  @required lastName = '';
  @required @email email = '';
  previousValue = this.fullName;

  constructor(controller) {
    this.controller = controller;
    this.controller.validateTrigger = validateTrigger.change; 
  }

  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    let errors = this.controller.validate();
    if(errors.length === 0){
      this.previousValue = this.fullName;
      alert(`Welcome, ${this.fullName}!`);
    }
  }

  canDeactivate() {
    let errors = this.controller.validate();
    if(errors.length > 0){
      return confirm('There are validation errors. Are you sure you want to leave?');
    }
    if (this.fullName !== this.previousValue) {
      alert(`The name is changed to ${this.fullName}!`);
      return true;
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
