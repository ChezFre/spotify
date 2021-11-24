import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Artists from "./Artists";

const artists = [
  {
    name: "Megan Thee Stallion",
    id: "181bsRPaVXVlUKXrxwZfHK",
    image: "https://i.scdn.co/image/ab6761610000e5ebaca34be6442f7c9580a8be82",
    albums: [
      {
        name: "Something for Thee Hotties",
        image:
          "https://i.scdn.co/image/ab67616d0000b27345fd9c645c76bd5b11bd7f3e",
      },
    ],
  },
  {
    name: "Melanie Martinez",
    id: "63yrD80RY3RNEM2YDpUpO8",
    image: "https://i.scdn.co/image/ab6761610000e5eb2d9f656f3f15165cd5cf8e5a",
    albums: [
      {
        name: "K-12 (After School – Deluxe Edition)",
        image:
          "https://i.scdn.co/image/ab67616d0000b27393d30edae9a17df041194480",
      },
      {
        name: "K-12",
        image:
          "https://i.scdn.co/image/ab67616d0000b2735945e0dce1af45d640cf06ea",
      },
    ],
  },
];

test("it renders", () => {
  const handleSelectArtist = jest.fn();
  render(<Artists artists={artists} selectArtist={handleSelectArtist} />);

  expect(screen.getByText("Megan Thee Stallion")).toBeInTheDocument();
  expect(screen.getByText("Melanie Martinez")).toBeInTheDocument();
  expect(screen.getByText("1 album")).toBeInTheDocument();
  expect(screen.getByText("2 albums")).toBeInTheDocument();
});

test("it responds to click events", () => {
  const handleSelectArtist = jest.fn();
  render(<Artists artists={artists} selectArtist={handleSelectArtist} />);

  fireEvent.click(
    screen.getByRole("button", { name: /megan thee stallion 1 album/i })
  );

  expect(handleSelectArtist).toHaveBeenCalledTimes(1);
  expect(handleSelectArtist).toHaveBeenCalledWith(artists[0]);

  fireEvent.click(screen.getByRole("button", { name: /Melanie Martinez/i }));

  expect(handleSelectArtist).toHaveBeenCalledTimes(2);
  expect(handleSelectArtist).toHaveBeenCalledWith(artists[1]);
});
