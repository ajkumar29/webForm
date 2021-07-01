import "./DonePage.css";

import { connect } from "react-redux";

import { FormValuesType } from "../types/form.types";

interface DonePagePropsType {
  formValues: FormValuesType;
  doneMessage: string;
}

function DonePage({
  formValues,
  doneMessage = "Completed",
}: DonePagePropsType) {
  console.log(formValues);

  return (
    <div className="donePage">
      <i className="icon bi bi-check2-circle"></i>
      <br />
      {doneMessage}
    </div>
  );
}

const mapStateToProps = (state: { formData: FormValuesType[] }) => {
  return {
    formValues: state.formData.values,
  };
};

export default connect(mapStateToProps)(DonePage);
