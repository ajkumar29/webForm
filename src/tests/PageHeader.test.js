import PageHeader from "../components/PageHeader";
import { render } from "@testing-library/react";

const setup = (selected, completed) => {
  const { getByText } = render(
    <PageHeader label={"test"} selected={selected} completed={completed} />
  );
  return { getByText };
};

test("render subheader with label and completed class", () => {
  const { getByText } = setup(false, true);

  const pageHeader = getByText("test");

  expect(pageHeader).toBeDefined();
  // check if assigned classes are correct
  expect(pageHeader.classList.contains("selected")).toBe(false);
  expect(pageHeader.classList.contains("completed")).toBe(true);
});

test("render subheader with label, completed and selected classes", () => {
  const { getByText } = setup(true, true);

  const pageHeader = getByText("test");

  expect(pageHeader).toBeDefined();
  // check if assigned classes are correct
  expect(pageHeader.classList.contains("selected")).toBe(true);
  expect(pageHeader.classList.contains("completed")).toBe(true);
});
