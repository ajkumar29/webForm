import { useState } from "react";
import Page from "./Page";
import DonePage from "./DonePage";
import { FormType, FormValuesType } from "../types/form.types";
import "./FormWizard.css";

import { connect } from "react-redux";
import { updateFormData } from "../redux/formData/formData.actions";

interface FormWizardPropsType {
  form: FormType;
  updateFormData: (arg0: FormValuesType) => void;
}

function FormWizard({ form, updateFormData }: FormWizardPropsType) {
  const { label, pages, doneMessage } = form;
  const [pageToShow, setPageToShow] = useState(0);
  const [done, setDone] = useState(false);

  const pagesToShow = (pages: any) => {
    let pagesInclDonePage = pages.map((page: any, index: number) => (
      <div>{page.label}</div>
    ));
    pagesInclDonePage.push(<div>Done</div>);
    return pagesInclDonePage;
  };

  const onSubmitClick = (
    e: { preventDefault: () => void },
    values: FormValuesType
  ) => {
    e.preventDefault();
    updateFormData(values);
    if (pageToShow < pages.length - 1) {
      setPageToShow(pageToShow + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="formWizard">
      <div className="formWizardTitle">{label}</div>

      <div className="pageHeader">{pagesToShow(pages)}</div>

      <div className="formPage">
        {!done ? (
          <Page
            fields={pages[pageToShow].fields}
            onSubmitClick={onSubmitClick}
          />
        ) : (
          <DonePage doneMessage={doneMessage} />
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; values: FormValuesType }) => any
) => {
  return {
    updateFormData: (values: FormValuesType) =>
      dispatch(updateFormData(values)),
  };
};

export default connect(null, mapDispatchToProps)(FormWizard);
