import { useState } from "react";
import { FormType } from "../types/form.types";
import DonePage from "./DonePage";
import Page from "./Page";

interface FormWizardPropsType {
  form: FormType;
}

export default function FormWizard({ form }: FormWizardPropsType) {
  const { label, pages, doneMessage } = form;
  const [done, setDone] = useState(false);

  return (
    <div className="formWizard">
      <div className="formWizardTitle">{label}</div>

      <div className="pageHeader">headings for each page here</div>

      <div className="formPage">
        {!done ? (
          <Page fields={pages[0].fields} />
        ) : (
          <DonePage doneMessage={doneMessage} />
        )}
      </div>
    </div>
  );
}
