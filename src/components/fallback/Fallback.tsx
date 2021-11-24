import { FC } from "react";
import { ReactComponent as Spotify } from "../../assets/spotify-logo.svg";
import * as styled from "./Fallback.styled";

const Fallback: FC = () => (
  <styled.FallbackContainer>
    <Spotify />
  </styled.FallbackContainer>
);

export default Fallback;
