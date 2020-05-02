import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  describe("Restaurant Card", () => {
    test("should display the first restaurant in the list", () => {
      const { getByText, getByLabelText } = render(<Home />);
      const homeText = getByText("KFC");
      const restaurantName = getByLabelText("restaurant card");
      expect(homeText).toBeInTheDocument();
      expect(restaurantName).toBeInTheDocument();
    });
  });
  describe("Load more button", () => {
    test("should have the 'Load More' button rendered", () => {
      const { getByText } = render(<Home />);
      const loadmoreButton = getByText("Load More");
      expect(loadmoreButton).toBeInTheDocument();
    });
  });
  describe("Statistics", () => {
    test("should display the 'Restaurants for you to choose!' in the list", () => {
      const { getByText, getByLabelText } = render(<Home />);
      const homeText = getByText("Restaurants for you to choose!");
      const stats = getByLabelText("stats");
      expect(homeText).toBeInTheDocument();
      expect(stats).toBeInTheDocument();
    });
  });
  describe("AddCollectionModal", () => {
    test("should display add collection Modal after clicking button", () => {
      const { getByText } = render(<Home />);
      const myCollectionButton = getByText("Add to collection");
      fireEvent.click(myCollectionButton);
      const addCollectionModalHeader = getByText("Adding to collection");
      expect(addCollectionModalHeader).toBeInTheDocument();
    });
  });
});
