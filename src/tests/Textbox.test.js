import { render, fireEvent } from "@testing-library/react";
import Textbox from "../components/fieldComponents/Textbox";

const setup = () => {
  const { getByLabelText } = render(
    <Textbox fieldProps={{ id: "1", label: "test" }} onChange={() => {}} />
  );
  return { getByLabelText };
};

test("renders textbox with label in fieldProps", () => {
  const { getByLabelText } = setup();
  expect(getByLabelText("test")).toBeDefined();
});

test("allows user input", () => {
  const { getByLabelText } = setup();
  expect(getByLabelText("test")).toBeDefined();
  const textbox = getByLabelText("test");
  fireEvent.change(textbox, { target: { value: "23" } });
  expect(textbox.value).toBe("23");
});
