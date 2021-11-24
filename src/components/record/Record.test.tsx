import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Record from "./Record";

test("it shows the name of the artist", () => {
  render(<Record cover="test.jpg" name="Kendrick Lamar" />);
  expect(screen.getByText("Kendrick Lamar")).toBeInTheDocument();
});

test("it renders an image of the artist", () => {
  render(<Record cover="test.jpg" name="Kendrick Lamar" />);
  expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
});

test("it removes the fallback when the image is loaded", () => {
  render(<Record cover="test.jpg" name="Kendrick Lamar" />);

  expect(screen.queryByTestId("fallback")).toBeInTheDocument();

  const image = screen.getByRole("img");
  fireEvent.load(image);

  expect(screen.queryByTestId("fallback")).not.toBeInTheDocument();
});

test("it shows a placeholder when the image fails to load", () => {
  render(<Record cover="test.jpg" name="Kendrick Lamar" />);

  expect(screen.queryByTestId("fallback")).toBeInTheDocument();

  const image = screen.getByRole("img");
  fireEvent.error(image);

  expect(screen.queryByTestId("fallback")).toBeInTheDocument();
});
