import React from "react";
import ReactDOM from "react-dom";
import { screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import Initial from "./Initial";

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container!);
  container = null;
});

test("it renders", async () => {
  await act(async () => {
    ReactDOM.render(<Initial />, container);
  });
  expect(screen.getByRole("heading")).toHaveTextContent("Start searching");
  expect(
    screen.getByText(
      "Search for your favourite artist to discover their discography."
    )
  ).toBeInTheDocument();
});
