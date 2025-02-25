export interface InputDetails
{
    InputType: InputTypes;
    Value: string | number | Date ;
    Name: string;
    Id: string;
    Label: string;
    Required: InputRequired;
    Validation: any;
    DataSource?: InputValues[];
}

export enum InputTypes{
    Text,
    Passsword,
    Dropdown,
    TextArea,
    Date
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