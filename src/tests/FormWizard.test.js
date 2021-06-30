import FormWizard from "../components/FormWizard";
import { render } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import { testForm } from "./testForm";

const setup = () => {
  const mockStore = configureMockStore();
  const store = mockStore({ formData: { values: {} } });
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <FormWizard form={testForm} updateFormData={() => {}} />
    </Provider>
  );
  return { getByLabelText, getByText };
};

test("render form with text and dropdown fields", () => {
  const { getByText } = setup();
  //Heading of form
  expect(getByText("User Register Form")).toBeDefined();

  //Subheadings of forms
  expect(getByText("Privacy")).toBeDefined();
  expect(getByText("Done")).toBeDefined();
  expect(getByText("User")).toBeDefined();

  //Field Labels of first page
  expect(getByText("Name*")).toBeDefined();
  expect(getByText("Role*")).toBeDefined();
  expect(getByText("Email*")).toBeDefined();
  expect(getByText("Password*")).toBeDefined();

  //Submit button
  expect(getByText("Submit")).toBeDefined();
});
