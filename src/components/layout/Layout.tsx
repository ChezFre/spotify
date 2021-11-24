import { FC } from "react";
import Search from "../search/Search";
import BackButton from "../backbutton/BackButton";
import { ReactComponent as SpotifyLogo } from "../../assets/spotify.svg";
import * as styled from "./Layout.styled";

type TProps = {
  onBackClick: () => void;
  backEnabled?: boolean;
  handleSearch: (query: string) => void;
};

const Layout: FC<TProps> = ({
  onBackClick,
  backEnabled = false,
  handleSearch,
  children,
}) => (
  <>
    <styled.Header>
      <BackButton onClick={onBackClick} disabled={!backEnabled} />
      <SpotifyLogo />
      <Search onSearch={handleSearch} />
    </styled.Header>
    <styled.Main>{children}</styled.Main>
  </>
);

export default Layout;
