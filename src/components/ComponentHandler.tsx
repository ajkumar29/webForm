import { FieldType } from "../types/form.types";
import Dropdown from "./fieldComponents/Dropdown";
import Textbox from "./fieldComponents/Textbox";
import Checkbox from "./fieldComponents/Checkbox";

export const mapToComponent = (
  field: FieldType,
  onFieldChange: (value: string | boolean, id: string) => void
) => {
  const { component, id } = field;
  switch (component) {
    case "textbox":
      return (
        <Textbox
          key={id}
          fieldProps={field}
          onChange={(value: string) => onFieldChange(value, id)}
        />
      );
    case "dropdown":
      return (
        <Dropdown
          key={id}
          fieldProps={field}
          onChange={(value: string) => onFieldChange(value, id)}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          key={id}
          fieldProps={field}
          onChange={(value: boolean) => onFieldChange(value, id)}
        />
      );
  }
};
