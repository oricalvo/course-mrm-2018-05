
import {Component, EventEmitter, forwardRef, Inject, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

class DatepickerValueAccessor implements ControlValueAccessor {
  constructor(@Inject(forwardRef(()=>DatepickerComponent)) hostComponent: DatepickerComponent) {
    console.log("ControlValueAccessor.ctor", hostComponent);
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useClass: DatepickerValueAccessor, multi: true}
  ]
})
export class DatepickerComponent implements OnInit {
  @Input() model: Date;
  @Output() modelChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.modelChange.emit(new Date());
  }
}
