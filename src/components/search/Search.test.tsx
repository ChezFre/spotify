import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Search from "./Search";

test("it renders a form", () => {
  const handleSearch = jest.fn();
  render(<Search onSearch={handleSearch} />);
  expect(screen.getByRole("search")).toBeInTheDocument();
  expect(screen.getByRole("searchbox")).toBeInTheDocument();
});

test("it triggers a callback when the input changes", async () => {
  const handleSearch = jest.fn();
  render(<Search onSearch={handleSearch} />);
  const searchbar = screen.getByRole("searchbox");

  fireEvent.change(searchbar, { target: { value: "test" } });

  expect(handleSearch).toBeCalledTimes(0);

  expect(searchbar).toHaveValue("test");

  await waitFor(() => {
    expect(handleSearch).toBeCalledTimes(1);
  });
});

test("it triggers a callback when the user submits the form", async () => {
  const handleSearch = jest.fn();
  render(<Search onSearch={handleSearch} />);
  const searchbar = screen.getByRole("searchbox");

  fireEvent.change(searchbar, { target: { value: "test" } });

  await waitFor(() => {
    expect(handleSearch).toBeCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith("test");
  });

  fireEvent.submit(screen.getByRole("search"));

  await waitFor(() => {
    expect(handleSearch).toBeCalledTimes(2);
    expect(handleSearch).toHaveBeenCalledWith("test");
  });
});
