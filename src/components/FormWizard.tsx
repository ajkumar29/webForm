import { useState } from "react";
import Page from "./Page";
import DonePage from "./DonePage";
import PageHeader from "./PageHeader";
import "./FormWizard.css";
import { FormType, PageType, FormValuesType } from "../types/form.types";

import { connect } from "react-redux";
import { updateFormData } from "../redux/formData/formData.actions";

interface FormWizardPropsType {
  //entire form to be rendered by the wizard
  form: FormType;

  //function to update redux store
  updateFormData: (arg0: FormValuesType) => void;
}

function FormWizard({ form, updateFormData }: FormWizardPropsType) {
  const { title, pages, doneMessage } = form;
  const [pageToShow, setPageToShow] = useState(0); //index of page to show on screen
  const [done, setDone] = useState(false); //state to indicate whether user has completed forms

  //generates headers to be displayed above form
  const headersToShow = (pages: PageType[]) => {
    let pagesInclDonePage = pages.map((page, index) => (
      <PageHeader
        key={page.id}
        title={page.title}
        selected={!done && page.id === pages[pageToShow].id}
        completed={done || index < pageToShow}
      />
    ));
    pagesInclDonePage.push(
      <PageHeader
        key={"donePage"}
        title={"Done"}
        selected={done}
        completed={false}
      />
    );
    return pagesInclDonePage;
  };

  //function to be triggered when submit button is clicked
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
      <div className="formWizardTitle">{title}</div>

      <div className="pageHeader">{headersToShow(pages)}</div>

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
