import { useState } from "react";

import "./Page.css";
import { FieldType, FormValuesType } from "../types/form.types";
import { mapToComponent } from "./ComponentHandler";

interface PagePropsType {
  fields: FieldType[];
  onSubmitClick: (
    e: { preventDefault: () => void },
    formValues: FormValuesType
  ) => void;
}

export default function Page({ fields, onSubmitClick }: PagePropsType) {
  const [formValues, setFormValues] = useState<FormValuesType>({});

  const onFieldChange = (value: any, id: string) => {
    let newValues = { ...formValues };
    newValues[id] = value;
    setFormValues(newValues);
  };

  return (
    <form
      className="form needs-validation"
      onSubmit={(e) => onSubmitClick(e, formValues)}
    >
      {fields.map((field) => mapToComponent(field, onFieldChange))}
      <div className="submitButton">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
