import React from "react";
import { render } from "@testing-library/react";
import Collection from "./Collection";

describe("Home", () => {
  describe("Statistics", () => {
    test("should display the 'restaurants in your collection!' in the list", () => {
      const { getByText } = render(<Collection />);
      const homeText = getByText("restaurants in your collection!");
      expect(homeText).toBeInTheDocument();
    });
  });
});
