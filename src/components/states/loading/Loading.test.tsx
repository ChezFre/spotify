import React from "react";
import ReactDOM from "react-dom";
import { screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import Loading from "./Loading";

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
    ReactDOM.render(<Loading />, container);
  });

  expect(screen.getByRole("heading")).toHaveTextContent("Loading");
  expect(screen.getByText("Hold on to your seat")).toBeInTheDocument();
});
