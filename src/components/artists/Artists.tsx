import React, { FC } from "react";
import { TArtist } from "../../types/artist";
import Artist from "../artist/Artist";
import * as styled from "./Artists.styled";

type TProps = {
  artists: TArtist[];
  selectArtist: (artist: TArtist) => void;
};

const Artists: FC<TProps> = ({ artists, selectArtist }) => (
  <section>
    <h1>Artists</h1>
    <styled.Artists>
      {artists.map((artist) => (
        <li key={artist.id}>
          <Artist
            albumCount={artist.albums.length}
            image={artist.image}
            name={artist.name}
            onClick={() => selectArtist(artist)}
          />
        </li>
      ))}
    </styled.Artists>
  </section>
);

export default Artists;
