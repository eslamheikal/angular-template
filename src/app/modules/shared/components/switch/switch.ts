import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'switch',
  imports: [CommonModule, ToggleSwitchModule, FormsModule, ReactiveFormsModule],
  templateUrl: './switch.html',
  styleUrl: './switch.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Switch),
      multi: true
    }
  ]
})
export class Switch implements ControlValueAccessor {
  @Input() checkedText: string = 'نعم';
  @Input() unCheckedText: string = 'لا';
  @Input() formControl: FormControl = new FormControl();
  @Output() changeEvent = new EventEmitter<boolean>();


  disabled: boolean = false;

  private _checked: boolean = false;

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
    this.changeEvent.emit(value);
    this.onTouched();
  }

  writeValue(value: boolean): void {
    this._checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.changeEvent.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
    this.disabled = isDisabled;
  }

  onTouched = () => { };
}