import { Component, OnInit, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    }
  ]
})
export class MyInputComponent implements ControlValueAccessor, Validator {

  disabled: boolean;
  value: any;
  private onChangeFn: (val: any) => any;
  private onTouchedFn: () => any;
  private onValidatorChangeFn: () => void;
  constructor(
    protected fb: FormBuilder,
    protected cdr: ChangeDetectorRef
  ) { }

  validate(control: AbstractControl): ValidationErrors {
    console.log(`validate:`,control);
    return null;
    // return this.onValidatorChangeFn(control);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChangeFn = fn;
  }


  onChange(value: any): void {
    this.onChangeFn(value);
  }

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
