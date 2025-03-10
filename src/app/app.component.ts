import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDetails, InputTypes } from './custom-html-inputs/custom-html-input-model';
import { NgFor, NgIf } from '@angular/common';
import { CustomHtmlInputsComponent } from './custom-html-inputs/custom-html-inputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, CustomHtmlInputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Dynamic-poc';
  inputs: InputDetails[];
  gridSource: InputDetails[][];
  gridRowId: number = 0;
  editModeOn: boolean = false;


  constructor(){
    this.gridRowId = 1;
    this.gridSource = [];
    this.inputs = [
      {
        Name: "Id",
        Id:"Id",
        Value : 0,
        InputType: InputTypes.Hidden,
        Label: "Id",
        Required: {
          IsRequired: true,
          Message:"Id is required"

        },
        Validation:{},
        IsKey: true
      },
      {
        Name: "Name",
        Id:"Name",
        Value : "",
        InputType: InputTypes.Text,
        Label: "Name",
        Required: {
          IsRequired: true,
          Message:"Name is required"

        },
        Validation:{},
        IsKey: false
      },
      {
        Name: "Dropdown",
        Id:"Dropdown",
        Value : null,
        InputType: InputTypes.Dropdown,
        Label: "Dropdown",
        Required: {
          IsRequired: true,
          Message:"Name is required"

        },
        Validation:{},
        IsKey: false,
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
      },
      {
        Name: "Checkbox",
        Id:"Checkbox",
        Value : [],
        InputType: InputTypes.Checkbox,
        Label: "Checkbox",
        Required: {
          IsRequired: true,
          Message:"checkbox is required"

        },
        Validation:{},
        IsKey: false,
        DataSource: [
          {
            Id: 1,
            Value: "One checkbox"

          },
          {
            Id: 2,
            Value: "Two checkbox"

          }
        ]
      }
    ]
  }

  addNew(){
    this.resetInputs();
    this.editModeOn = true;
  }

  onSave(){
    var data: InputDetails[] = Object.create([]);
    this.inputs.forEach(x => data.push({
      Id: x.Id,
      InputType: x.InputType,
      Label:x.Label,
      Name: x.Name,
      Value: this.getValueOrId(x),
      DataSource: x.DataSource,
      Required:x.Required,
      Validation:x.Validation,
      IsKey: x.IsKey
    }));
    //data = Object.([],this.inputs);
    var findIndex = this.gridSource.findIndex(x => this.compareInputDetails(x,data));
    if(findIndex >= 0){
      this.gridSource[findIndex]= data;
    }else{
      this.gridSource.push(data);      
    }
    this.resetInputs();
    this.editModeOn = false;
    alert("Data saved successfully")

  }

  compareInputDetails(input1: InputDetails[], input2: InputDetails[]){
    if(input1 == null || input1 == undefined || input1.length <= 0 
      ||
      input2 == null || input2 == undefined || input2.length <= 0  ){
      return false;
    }
    var keyObject1 = input1.find(x => x.IsKey);
    if(!keyObject1){
      return false;
    }
    var keyObject2 = input2.find(x => x.IsKey);
    if(!keyObject2){
      return false;
    }

    return keyObject1.Value.toString() === keyObject2.Value.toString(); 

  }

  getValueOrId(input: InputDetails){
    if(input.InputType === InputTypes.Hidden && input.IsKey){
      if(input.Value == '' || input.Value == null || input.Value == undefined || input.Value == 0){
        input.Value = this.gridRowId ++;
      }
    }
    return input.Value;
  }

  resetInputs(){
    this.inputs.forEach(x => x.Value = null);
  }

  onEdit(paramInputs: InputDetails[]){
    this.resetInputs();
    console.log(paramInputs);
    this.inputs.forEach(x => {
      var findIndex = paramInputs.findIndex(p => p.Id == x.Id);
      if(findIndex >= 0){
        x.Value = paramInputs[findIndex].Value;
      }
    });
    this.editModeOn = true;

  }

  onDelete(paramInputs: InputDetails[]){
    console.log(paramInputs);
    this.resetInputs();
    this.editModeOn = false;
    var findIndex = this.gridSource.findIndex(x => this.compareInputDetails(x,paramInputs));
    if(findIndex >= 0){
      this.gridSource.splice(findIndex,1);
    }
    alert("Data deleted successfully");
  }

  onCancel(){
    this.resetInputs();
    this.editModeOn = false;
  }
}
