import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Artist from "./Artist";

test("it renders an artist", () => {
  render(<Artist albumCount={10} image="artist.jpg" name="Kendrick Lamar" />);
  expect(screen.getByText("Kendrick Lamar")).toBeInTheDocument();
  expect(screen.getByText("10 albums")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "artist.jpg");
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

test("it uses the singular of album when only 1 is present", () => {
  render(<Artist albumCount={1} image="artist.jpg" name="Kendrick Lamar" />);
  expect(screen.getByText("1 album")).toBeInTheDocument();
});

test("it removes the fallback when the image is loaded", () => {
  render(<Artist albumCount={1} image="artist.jpg" name="Kendrick Lamar" />);

  expect(screen.queryByTestId("fallback")).toBeInTheDocument();

  const image = screen.getByRole("img");
  fireEvent.load(image);

  expect(screen.queryByTestId("fallback")).not.toBeInTheDocument();
});

test("it renders as a button when an onClick is passed", () => {
  const artist = {
    name: "Kendrick Lamar",
    id: "2YZyLoL8N0Wb9xBt1NhZWg",
    image: "https://i.scdn.co/image/ab6761610000e5eb2183ea958d3777d4c485138a",
    albums: [
      {
        name: "Black Panther The Album Music From And Inspired By",
        image:
          "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
      },
      {
        name: "Black Panther The Album Music From And Inspired By",
        image:
          "https://i.scdn.co/image/ab67616d0000b273a8f9bf75a4f4ba99439800b3",
      },
    ],
  };

  const selectArtist = jest.fn().mockReturnValue(artist);

  render(
    <Artist
      albumCount={artist.albums.length}
      image={artist.image}
      name={artist.name}
      onClick={selectArtist}
    />
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  expect(selectArtist).toHaveReturnedWith(artist);
});
