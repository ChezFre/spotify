import styled from "styled-components";
import { slideUp } from "../style/animations";
import List from "../list/List";

export const Artists = styled(List)`
  animation: ${slideUp} 0.1s ease-out both;
`;
