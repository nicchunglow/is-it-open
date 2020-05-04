import React from "react";
import { render, fireEvent, within, wait } from "@testing-library/react";
import Home from "./Home";
import Papa from "papaparse";
jest.mock("papaparse");

const mockData = [
  ["burgerking", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
  ["kfc", "everyday"],
  ["macs", "everyday"],
];
describe("Home", () => {
  beforeEach(() => {
    const mockResponse = {
      data: mockData,
    };

    Papa.parse.mockImplementationOnce((url, obj) => {
      obj.complete(mockResponse);
    });
  });
  describe("Restaurant Card", () => {
    test("should display the first restaurant in the list", () => {
      const { getByText } = render(<Home />);
      const firstRestaurant = getByText(mockData[0][0]);
      expect(firstRestaurant).toBeInTheDocument();
    });
  });
  describe("Load more button", () => {
    test("should have the 'Load More' button rendered", () => {
      const { getByText } = render(<Home />);
      const loadMoreButton = getByText("Load More");
      expect(loadMoreButton).toBeInTheDocument();
    });
    test("should have 20 restaurants", () => {
      const { getByText, getAllByLabelText } = render(<Home />);
      const loadMoreButton = getByText("Load More");
      fireEvent.click(loadMoreButton);
      const allRestaurants = getAllByLabelText("restaurant card");
      expect(allRestaurants).toHaveLength(20);
      // expect(loadMoreButton).toBeInTheDocument();
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
      const { getByText, getAllByText } = render(<Home />);
      const myCollectionButton = getAllByText("Add to collection");
      fireEvent.click(myCollectionButton[0]);
      const addCollectionModalHeader = getByText("Adding to collection");
      expect(addCollectionModalHeader).toBeInTheDocument();
    });
  });
});
