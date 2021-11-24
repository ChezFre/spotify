import { FC } from "react";
import State from "../state/State";

const Initial: FC = () => (
  <State
    title="Start searching"
    message="Search for your favourite artist to discover their discography."
  />
);

export default Initial;
