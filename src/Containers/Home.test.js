import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("should render 'Home created'", () => {
    const { getByText } = render(<Home />);
    const homeText = getByText("Home created");
    expect(homeText).toBeInTheDocument();
  });
});
