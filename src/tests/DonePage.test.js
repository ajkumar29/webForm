import { render } from "@testing-library/react";
import DonePage from "../components/DonePage";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

test("renders done page with default message 'completed'", () => {
  const mockStore = configureMockStore();
  const store = mockStore({ formData: { values: {} } });
  const { getByText } = render(
    <Provider store={store}>
      <DonePage formValues={{ test: "testValue" }} />
    </Provider>
  );
  expect(getByText("Completed")).toBeDefined();
});

test("renders done page with custom done message", () => {
  const mockStore = configureMockStore();
  const store = mockStore({ formData: { values: {} } });
  const { getByText } = render(
    <Provider store={store}>
      <DonePage
        formValues={{ test: "testValue" }}
        doneMessage={"Thank you. You will receive an email shortly"}
      />
    </Provider>
  );
  expect(
    getByText("Thank you. You will receive an email shortly")
  ).toBeDefined();
});
