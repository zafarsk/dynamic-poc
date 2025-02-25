import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDetails, InputTypes } from './custom-html-inputs/custom-html-input-model';
import { NgFor } from '@angular/common';
import { CustomHtmlInputsComponent } from './custom-html-inputs/custom-html-inputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CustomHtmlInputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'dynamic-poc';
  inputs: InputDetails[];

  constructor(){
    this.inputs = [
      {
        Name: "Name",
        Id:"Name",
        Value : "Sk Zafar",
        InputType: InputTypes.Text,
        Label: "Name",
        Required: {
          IsRequired: true,
          Message:"Name is required"

        },
        Validation:{}
      },
      {
        Name: "Dropdown",
        Id:"Dropdown",
        Value : "1",
        InputType: InputTypes.Dropdown,
        Label: "Dropdown",
        Required: {
          IsRequired: true,
          Message:"Name is required"

        },
        Validation:{},
        DataSource: [
          {
            Id: 1,
            Value: "One"

          },
          {
            Id: 2,
            Value: "Two"

          }
        ]
      }
    ]
  }
}
