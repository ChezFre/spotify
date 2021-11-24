import { CSSProperties, FC, useRef, useState } from "react";
import { useResizeObserver } from "@mantine/hooks";
import Fallback from "../fallback/Fallback";
import * as styled from "./Record.styled";

type TProps = {
  cover: string;
  name: string;
};

interface IVariables extends CSSProperties {
  "--containerWidth": string;
  "--duration": string;
}

const Record: FC<TProps> = ({ cover, name }) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, rect] = useResizeObserver();
  const labelRef = useRef<HTMLParagraphElement>(null);
  const duration =
    ((labelRef.current?.scrollWidth ?? rect.width) - rect.width) * 50;

  const handleLoad = () => setLoaded(true);

  return (
    <styled.Record
      ref={ref}
      onClick={console.log}
      style={
        {
          "--containerWidth": `${Math.round(rect.width)}px`,
          "--duration": `${duration}ms`,
        } as IVariables
      }
    >
      <styled.Cover loaded={loaded}>
        {!loaded && <Fallback />}
        <styled.CoverImage
          src={cover}
          alt=""
          onLoad={handleLoad}
          loaded={loaded}
          width="640"
          height="640"
        />
      </styled.Cover>
      <styled.Marquee ref={labelRef}>
        <span>{name}</span>
      </styled.Marquee>
    </styled.Record>
  );
};

export default Record;
