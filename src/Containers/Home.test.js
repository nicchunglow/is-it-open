import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("should render 'Home created'", () => {
    const { getByText } = render(<Home />);
    const homeText = getByText("Is it Open?");
    expect(homeText).toBeInTheDocument();
  });
  test("should display the first restaurant of the list", () => {
    const { getByText } = render(<Home />);
    const restaurantName = getByText("Kushi Tsuru");
    expect(restaurantName).toHaveTextContent("Kushi Tsuru");
  });
});
