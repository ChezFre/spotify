import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Layout from "./Layout";

test("it disables the back button", () => {
  const handleBackClick = jest.fn();

  render(
    <Layout onBackClick={handleBackClick} handleSearch={() => {}}>
      Content
    </Layout>
  );

  const backButton = screen.getByRole("button", {
    name: /back to search results/i,
  });

  fireEvent.click(backButton);

  expect(backButton).toBeDisabled();
  expect(handleBackClick).toHaveBeenCalledTimes(0);
});

test("it enables the back button", () => {
  const handleBackClick = jest.fn();

  render(
    <Layout onBackClick={handleBackClick} backEnabled handleSearch={() => {}}>
      Content
    </Layout>
  );

  const backButton = screen.getByRole("button", {
    name: /back to search results/i,
  });

  fireEvent.click(backButton);

  expect(backButton).not.toBeDisabled();
  expect(handleBackClick).toHaveBeenCalledTimes(1);
});

test("it handles searchinput", async () => {
  const handleSearch = jest.fn();

  render(
    <Layout onBackClick={() => {}} backEnabled handleSearch={handleSearch}>
      Content
    </Layout>
  );

  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "test" },
  });

  await waitFor(() => {
    expect(handleSearch).toBeCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith("test");
  });
});

test("it renders children", () => {
  render(
    <Layout onBackClick={() => {}} backEnabled handleSearch={() => {}}>
      <p>Content</p>
    </Layout>
  );

  expect(screen.getByText("Content")).toBeInTheDocument();
});
