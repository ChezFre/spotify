import { FC } from "react";
import State from "../state/State";

const FatalError: FC = () => (
  <State
    title="A fatal error has occured"
    message="An unrecoverable configuration mismatch has been detected. Please check
    back later."
  />
);

export default FatalError;
