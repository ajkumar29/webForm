import { useState } from "react";
import Page from "./Page";
import DonePage from "./DonePage";
import PageHeader from "./PageHeader";
import "./FormWizard.css";
import { FormType, PageType, FormValuesType } from "../types/form.types";

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

  const pagesToShow = (pages: PageType[]) => {
    let pagesInclDonePage = pages.map((page, index) => (
      <PageHeader
        key={page.id}
        label={page.label}
        selected={!done && page.id === pages[pageToShow].id}
        completed={done || index < pageToShow}
      />
    ));
    pagesInclDonePage.push(
      <PageHeader
        key={"donePage"}
        label={"Done"}
        selected={done}
        completed={false}
      />
    );
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
