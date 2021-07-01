import Page from "../components/Page";
import { render } from "@testing-library/react";

import { testForm } from "./testForm";

const setup = () => {
  const testFields = testForm["pages"][0].fields;
  const testId = testForm["pages"][0].id;
  const { getByText } = render(
    <Page id={testId} fields={testFields} onSubmitClick={() => {}} />
  );
  return { getByText };
};

test("render page with fields and submit button", () => {
  const { getByText } = setup();

  //Field Labels of first page
  expect(getByText("Name*")).toBeDefined();
  expect(getByText("Role*")).toBeDefined();
  expect(getByText("Email*")).toBeDefined();
  expect(getByText("Password*")).toBeDefined();

  //Submit button
  expect(getByText("Submit")).toBeDefined();
});
