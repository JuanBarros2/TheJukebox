import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-error-form',
  templateUrl: './field-error-form.component.html',
  styleUrls: ['./field-error-form.component.css']
})
export class FieldErrorFormComponent implements OnInit {

  @Input() msgErro: string;
  @Input() showErro: boolean;

  constructor() { }

  ngOnInit() {
  }
}
