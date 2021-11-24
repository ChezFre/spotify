import { FC } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";
import * as styled from "./BackButton.styled";

type TProps = {
  disabled?: boolean;
  onClick: () => void;
};

const BackButton: FC<TProps> = ({ onClick, disabled = false }) => (
  <styled.BackButton onClick={onClick} disabled={disabled}>
    <ArrowLeft />
    <VisuallyHidden>Back to search results</VisuallyHidden>
  </styled.BackButton>
);

export default BackButton;
