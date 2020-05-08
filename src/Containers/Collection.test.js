import React from "react";
import { render } from "@testing-library/react";
import Collection from "./Collection";

describe("Home", () => {
  describe("Statistics", () => {
    test("should display the 'number of collections made!' in the list", () => {
      const { getByText } = render(<Collection />);
      const homeText = getByText("number of collections made!");
      expect(homeText).toBeInTheDocument();
    });
  });
});
