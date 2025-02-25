import { Component, Input } from '@angular/core';
import { InputDetails, InputTypes } from './custom-html-input-model';
import { NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-custom-html-inputs',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './custom-html-inputs.component.html',
  styleUrl: './custom-html-inputs.component.css'
})
export class CustomHtmlInputsComponent {

  @Input() inputDetails: Partial<InputDetails> | undefined;
  selectedValue = null;

  constructor(){
    
  }

  checkInput(stringType: string): Boolean{
    console.log(InputTypes.Text.toString());
    if(this.inputDetails == undefined) return false;

    let retValue: Boolean = false;
    switch(stringType){
      case InputTypes.Text.toString():
        retValue = this.inputDetails.InputType == InputTypes.Text;
        break;
      case InputTypes.TextArea.toString():
        retValue = this.inputDetails.InputType == InputTypes.TextArea;
        break;
      case InputTypes.Dropdown.toString():
        retValue = this.inputDetails.InputType == InputTypes.Dropdown;
        break;
      default: retValue = false; break;
    }

    return retValue;
  }

}
