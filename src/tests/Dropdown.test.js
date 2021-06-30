import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dropdown from "../components/fieldComponents/Dropdown";

const setup = () => {
  const { getByLabelText, getByText } = render(
    <Dropdown
      fieldProps={{ id: "1", label: "test", data: ["test1", "test2", "test3"] }}
      onChange={() => {}}
    />
  );
  return { getByLabelText, getByText };
};

test("renders Dropdown with label in fieldProps", () => {
  const { getByLabelText } = setup();
  expect(getByLabelText("test")).toBeDefined();
});

test("user able to select option", () => {
  const { getByLabelText, getByText } = setup();
  expect(getByLabelText("test")).toBeDefined();
  const dropdown = getByLabelText("test");

  userEvent.selectOptions(dropdown, "test2");
  expect(getByText("test1").selected).toBeFalsy();
  expect(getByText("test2").selected).toBeTruthy();
  expect(getByText("test3").selected).toBeFalsy();
});
