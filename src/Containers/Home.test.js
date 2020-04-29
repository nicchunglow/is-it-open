import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("should display the first restaurant of the list", () => {
    const { getByText } = render(<Home />);
    const restaurantName = getByText("Kushi Tsuru");
    expect(restaurantName).toHaveTextContent("Kushi Tsuru");
  });
  test("should display the last restaurant in the list", () => {
    const { getByText } = render(<Home />);
    const restaurantName = getByText("Simon's Café");
    expect(restaurantName).toHaveTextContent("Simon's Café");
  });
});
