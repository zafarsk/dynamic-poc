export interface InputDetails
{
    InputType: InputTypes;
    Value: string | number | Date | any | any[];
    Name: string;
    Id: string;
    Label: string;
    Required: InputRequired;
    Validation: any;
    DataSource?: InputValues[];
    IsKey: boolean;
}

export enum InputTypes{
    Text,
    Passsword,
    Dropdown,
    TextArea,
    Date,
    Checkbox,
    Hidden
}

export  interface InputValues{
    Id:number | string;
    Value : string;
}

export interface InputValidation{
    InputType: InputTypes;

}

export  interface InputRequired{
    IsRequired: boolean;
    Message : string;
}