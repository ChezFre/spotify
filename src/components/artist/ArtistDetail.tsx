import { FC } from "react";
import Record from "../record/Record";
import * as styled from "./ArtistDetail.styled";

type TProps = {
  name: string;
  image: string;
  albums: { name: string; image: string }[];
};

const ArtistDetail: FC<TProps> = ({ name, image, albums }) => (
  <styled.ArtistDetail>
    <styled.Artist name={name} image={image} albumCount={albums.length} />
    <styled.Discography>
      <h2>Discography</h2>
      <ul>
        {albums.map(({ name, image }, index) => (
          <li key={`${name}_${index}`}>
            <Record cover={image} name={name} key={name} />
          </li>
        ))}
      </ul>
    </styled.Discography>
  </styled.ArtistDetail>
);

export default ArtistDetail;
