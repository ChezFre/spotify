import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ArtistDetail from "./ArtistDetail";

test("it renders an ArtistDetail", () => {
  render(
    <ArtistDetail
      image="photo.jpg"
      name="Kendrick Lamar"
      albums={[
        {
          name: "Album 1",
          image: "album-1.jpg",
        },
      ]}
    />
  );

  expect(
    screen.getByRole("heading", { name: /kendrick lamar/i })
  ).toHaveTextContent("Kendrick Lamar");
  expect(screen.getByTestId("albumcount")).toHaveTextContent("1 album");
  expect(screen.getByText(/Album 1/i)).toBeInTheDocument();
});

test("it shows the albumcount in plural", () => {
  render(
    <ArtistDetail
      image="photo.jpg"
      name="Kendrick Lamar"
      albums={[
        {
          name: "Album 1",
          image: "album-1.jpg",
        },
        {
          name: "Album 1",
          image: "album-1.jpg",
        },
      ]}
    />
  );

  expect(screen.getByTestId("albumcount")).toHaveTextContent("2 album");
});
