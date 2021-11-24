import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import BackButton from "./BackButton";

test("it renders the backbutton", () => {
  render(<BackButton onClick={() => {}} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("it disables the backbutton", () => {
  render(<BackButton onClick={() => {}} disabled />);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("it doesn't call the onClick handler when clicked while disabled", () => {
  const handleClick = jest.fn();
  render(<BackButton onClick={handleClick} disabled />);
  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(handleClick).toBeCalledTimes(0);
});

test("it calls the onClick handler when clicked", () => {
  const handleClick = jest.fn();
  render(<BackButton onClick={handleClick} />);
  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(handleClick).toBeCalledTimes(1);

  fireEvent.click(button);
  expect(handleClick).toBeCalledTimes(2);
});
