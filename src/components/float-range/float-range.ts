import { Component, ViewChild, Input, forwardRef } from '@angular/core';
import { Range } from 'ionic-angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '../../../node_modules/@angular/forms';
/**
 * Generated class for the FloatRangeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'float-range',
  //templateUrl: 'float-range.html',
  template: '<ion-item no-lines><ion-range #range [min]="min" [max]="max" [pin]="pin" [step]="step" [snaps]="snaps" [(ngModel)]="_ngModel"><ion-label range-left>20</ion-label><ion-label range-right>50</ion-label></ion-range></ion-item>',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FloatRangeComponent,
    multi: true
  }]
})

export class FloatRangeComponent implements ControlValueAccessor {

  text: string;
  @Input() max: number;
  @Input() min: number;
  @Input() pin: boolean;
  @Input() step: number;
  @Input() snaps: boolean;
  @Input() _ngModel: any;
  //@Input('waist') ngModel: any;
  public formData = {waist: '44'};
  
  private onChange: Function = (waist: number) => {};
  private onTouch: Function = () => {};
  private disabled: boolean = false;

  constructor() {
    console.log('Hello FloatRangeComponent Component');
    this.text = 'Hello World';
  }

  @ViewChild('range')
  set range(range: Range) {
    let floatRange: FloatRangeComponent = this;
    range._ratioToValue = function(ratio: number) {
      this._step = Math.round(floatRange.step * 100) / 100;
      ratio = (this._max - this._min) * ratio;
      ratio = (ratio / this._step) * this._step + this._min;
      return Math.round(ratio * ( 1 / this._step)) / ( 1 / this._step);
      this.onTouch();
    }
  }
  
  // Allow Angular to set the value on the component
  writeValue(value: number): void {
    this.onChange(value);
    this.waist = value;
  }
 
  // Save a reference to the change function passed to us by
  // the Angular form control
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
 
  // Save a reference to the touched function passed to us by
  // the Angular form control
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;   
  }
 
  // Allow the Angular form control to disable this input
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
  
}
