import React, { FC, useEffect, useRef } from "react";
import { ReactComponent as SpotifyLogo } from "../../../assets/spotify-logo.svg";
import { TStateType } from "./types";
import * as styled from "./State.styled";

type TProps = {
  type?: TStateType;
  title: string;
  message?: string;
  className?: string;
};

const getType = async (type: TStateType) => {
  switch (type) {
    case "error": {
      const { default: Logo } = await import(
        "!!@svgr/webpack?-svgo,+titleProp,+ref!../../../assets/error.svg"
      );
      return <Logo />;
    }
    case "no-results": {
      const { default: Logo } = await import(
        "!!@svgr/webpack?-svgo,+titleProp,+ref!../../../assets/no-results.svg"
      );
      return <Logo />;
    }
    default: {
      return <SpotifyLogo />;
    }
  }
};

const Feedback: FC<TProps> = ({
  type = "initial",
  title,
  message,
  className,
}) => {
  const [icon, setIcon] = React.useState<React.ReactNode>();
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    async function fetchIcon() {
      const svg = await getType(type);
      if (mounted.current) setIcon(svg);
    }
    fetchIcon();
  }, [type]);

  if (!icon) return null;

  return (
    <styled.Wrapper className={className}>
      <styled.Icon type={type}>{icon}</styled.Icon>
      <h1>{title}</h1>
      {message && <p data-testid="feedback__message">{message}</p>}
    </styled.Wrapper>
  );
};

export default Feedback;
