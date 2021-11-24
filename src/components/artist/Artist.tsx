import { FC, useState } from "react";
import Fallback from "../fallback/Fallback";
import * as styled from "./Artist.styled";

type TProps = {
  image: string;
  name: string;
  albumCount: number;
  onClick?: () => void;
  className?: string;
};

const Artist: FC<TProps> = ({
  className,
  albumCount,
  image,
  name,
  onClick,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => setLoaded(true);

  const artist = (
    <>
      <styled.ImageContainer>
        {!loaded && <Fallback />}
        <styled.Image
          src={image}
          onLoad={handleLoad}
          loaded={loaded}
          width="640"
          height="640"
        />
      </styled.ImageContainer>
      <styled.Name as={onClick ? undefined : "h1"}>{name}</styled.Name>
      <styled.AlbumCount data-testid="albumcount">
        {albumCount} {albumCount === 1 ? "album" : "albums"}
      </styled.AlbumCount>
    </>
  );

  return onClick ? (
    <styled.Button onClick={onClick} className={className}>
      {artist}
    </styled.Button>
  ) : (
    <styled.Wrapper className={className}>{artist}</styled.Wrapper>
  );
};

export default Artist;
