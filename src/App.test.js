import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should render 'Is it Open?' ", () => {
  const { getByText } = render(<App />);
  const homeText = getByText("Is it Open?");
  expect(homeText).toBeInTheDocument();
});
