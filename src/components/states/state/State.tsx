import { FC } from "react";
import { ReactComponent as SpotifyLogo } from "../../../assets/spotify-logo.svg";
import * as styled from "./State.styled";

type TProps = {
  title: string;
  message?: string;
};

const State: FC<TProps> = ({ title, message }) => (
  <styled.Wrapper>
    <styled.Icon>
      <SpotifyLogo />
    </styled.Icon>
    <h1>{title}</h1>
    {message && <p>{message}</p>}
  </styled.Wrapper>
);

export default State;
