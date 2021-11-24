import { FC } from "react";
import State from "../state/State";

type TProps = {
  message?: string;
};

const Error: FC<TProps> = ({ message }) => (
  <State type="error" title="We've encountered an issue" message={message} />
);

export default Error;
