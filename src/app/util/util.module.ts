import { FieldErrorFormComponent } from './field-error-form/field-error-form.component';
import { exportNgVar } from '@angular/platform-browser/src/dom/util';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FieldErrorFormComponent],
  declarations: [FieldErrorFormComponent]
})
export class UtilModule { }
