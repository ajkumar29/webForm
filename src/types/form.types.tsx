export interface FormValuesType {
  [key: string]: any;
}
export interface FormType {
  label: string;
  doneMessage: string;
  pages: PageType[];
}

export interface PageType {
  label: string;
  id: string;
  fields: FieldType[];
}

export interface FieldType {
  id: string;
  label: string;
  component: string;
  required?: boolean;
}

interface ValidationType {
  type: string;
  validRegex?: string;
  errorMessage?: string;
}

export interface TextboxFieldType extends FieldType {
  validation?: ValidationType;
  placeholderText?: string;
}

export interface DropdownFieldType extends FieldType {
  data?: string[];
  placeholderText?: string;
}

export interface CheckboxFieldType extends FieldType {}
