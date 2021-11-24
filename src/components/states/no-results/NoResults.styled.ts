import styled from "styled-components";
import BaseState from "../state/State";

export const State = styled(BaseState)`
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }
`;
