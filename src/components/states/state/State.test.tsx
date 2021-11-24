import React from "react";
import ReactDOM from "react-dom";
import { screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import State from "./State";

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container!);
  container = null;
});

test("it shows State with a title and message", async () => {
  await act(async () => {
    ReactDOM.render(<State title="My Title" message="My Message" />, container);
  });
  expect(screen.getByText("My Title")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent("My Title");
  expect(screen.getByText("My Message")).toBeInTheDocument();
});

test("It renders without a message", async () => {
  await act(async () => {
    ReactDOM.render(<State title="My Title" />, container);
  });
  expect(screen.getByText("My Title")).toBeInTheDocument();
  expect(screen.queryByText("My Message")).not.toBeInTheDocument();
});

test("It renders a Spotify Logo icon based on type", async () => {
  await act(async () => {
    ReactDOM.render(<State type="initial" title="My Title" />, container);
  });

  expect(screen.getByText(/spotify-logo.svg/i)).toBeInTheDocument();
});
