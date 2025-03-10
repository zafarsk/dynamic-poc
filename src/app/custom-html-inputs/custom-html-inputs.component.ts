import { Component, Input, Output } from '@angular/core';
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
  @Output() outputValue: any;
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
      case InputTypes.Checkbox.toString():
        retValue = this.inputDetails.InputType == InputTypes.Checkbox;
        break;
        
      default: retValue = false; break;
    }

    return retValue;
  }

  onChange($event: any){
    //console.log($event);
    if(this.inputDetails)
      if(this.inputDetails.InputType == InputTypes.Checkbox){
        if(!$event.target.checked){
          var index = this.inputDetails.Value.findIndex((x:any) => x === $event.target.value);
          if(index >= 0){
            console.log(this.inputDetails.Value);
            this.inputDetails.Value.splice(index, 1);
            console.log(this.inputDetails.Value);
          }
        }else{
          if(this.inputDetails.Value == null || this.inputDetails.Value == undefined){
            this.inputDetails.Value = [];
          }
          this.inputDetails.Value.push( $event.target.value);
        }
        
      }else
        this.inputDetails.Value = $event.target.value;

  }

  checkedExists(id: any){
    
    if(this.inputDetails?.Value?.length <= 0)
      return false;
    return this.inputDetails?.Value?.some((xId: any) => xId.toString() === id.toString());
  }

}
