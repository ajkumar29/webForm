export interface FormValuesType {
  //type for the form values which will be created by form and stored in redux
  [key: string]: any;
}
export interface FormType {
  //title of form to be displayed
  title: string;

  //message to display on the done page upon form completion
  doneMessage: string;

  //array of pages for the form
  pages: PageType[];
}

export interface PageType {
  //title of page
  title: string;

  //id of page
  id: string;

  //array of fields to be displayed on the page
  fields: FieldType[];
}

export interface FieldType {
  //id of field
  id: string;

  //label to be displayed for the field
  label: string;

  //component to render for field
  component: string;

  //whether the field is required to be filled by user
  required?: boolean;
}

interface ValidationType {
  //type of validation: e.g. text, number, email, password
  type: string;

  //regex for input
  validRegex?: string;

  //error to be displayed should regex fail for input value
  errorMessage?: string;
}

export interface TextboxFieldType extends FieldType {
  //validation details for textbox
  validation?: ValidationType;

  //text to show prior to user typing
  placeholderText?: string;
}

export interface DropdownFieldType extends FieldType {
  //array containing the data to be displayed in the dropdown
  data?: string[];

  //text to display on first load on dropdown
  placeholderText?: string;
}

export interface CheckboxFieldType extends FieldType {}
