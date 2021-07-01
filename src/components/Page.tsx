import { useState, useEffect } from "react";

import "./Page.css";
import { FieldType, FormValuesType } from "../types/form.types";
import { mapToComponent } from "./ComponentHandler";

interface PagePropsType {
  //ID of page
  id: string;

  //fields to be displayed on the page
  fields: FieldType[];

  //callback function to be triggered when submit button is clicked on the current page
  onSubmitClick: (
    e: { preventDefault: () => void },
    formValues: FormValuesType
  ) => void;
}

export default function Page({
  id: pageId,
  fields,
  onSubmitClick,
}: PagePropsType) {
  const [formValues, setFormValues] = useState<FormValuesType>({});

  //function to change state when field changes
  const onFieldChange = (value: any, id: string) => {
    let newValues = { ...formValues };
    newValues[id] = value;
    setFormValues(newValues);
  };

  useEffect(() => {
    setFormValues({});
  }, [pageId]);

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
