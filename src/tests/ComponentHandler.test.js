import { mapToComponent } from "../components/ComponentHandler";
import { render } from "@testing-library/react";

const textBoxField = {
  label: "Name",
  id: "name",
  component: "textbox",
  required: true,
  validation: {
    type: "text",
  },
  placeholderText: "Enter name",
};

const dropdownField = {
  label: "dropdown test",
  id: "role",
  component: "dropdown",
  data: ["mapping test 1", "mapping test 2", "mapping test 3"],
  placeholderText: "Please select your role",
};

const checkboxField = {
  component: "checkbox",
  id: "accurate-tick",
  label: "This is a test",
  required: true,
};

const setup = (field) => {
  const { getByText } = render(mapToComponent(field));
  return { getByText };
};

test("MapToComponent function renders textbox", () => {
  const { getByText } = setup(textBoxField);
  const textbox = getByText("Name*");
  expect(textbox).toBeDefined();
});

test("MapToComponent function renders checkbox", () => {
  const { getByText } = setup(checkboxField);
  const checkbox = getByText("This is a test*");
  expect(checkbox).toBeDefined();
});

test("MapToComponent function renders dropdown", () => {
  const { getByText } = setup(dropdownField);
  expect(getByText("dropdown test")).toBeDefined();
  expect(getByText("mapping test 1")).toBeDefined();
  expect(getByText("mapping test 2")).toBeDefined();
  expect(getByText("mapping test 3")).toBeDefined();
});
