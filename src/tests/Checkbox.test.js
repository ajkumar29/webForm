import { render } from "@testing-library/react";
import Checkbox from "../components/fieldComponents/Checkbox";

const setup = () => {
  const { getByLabelText } = render(
    <Checkbox fieldProps={{ id: "1", label: "test" }} onChange={() => {}} />
  );
  return { getByLabelText };
};

test("renders checkbox with label in fieldProps", () => {
  const { getByLabelText } = setup();
  expect(getByLabelText("test")).toBeDefined();
});

test("renders clickable checkbox", () => {
  const { getByLabelText } = setup();

  expect(getByLabelText("test")).toBeDefined();
  const checkbox = getByLabelText("test");
  expect(checkbox.checked).toEqual(false);
  checkbox.click();
  expect(checkbox.checked).toEqual(true);
});
