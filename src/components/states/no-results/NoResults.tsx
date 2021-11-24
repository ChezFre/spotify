import React, { FC } from "react";
import * as styled from "./NoResults.styled";

type TProps = {
  query: string;
};

const NoResults: FC<TProps> = ({ query }) => (
  <styled.State type="no-results" title="No results" message={query} />
);

export default NoResults;
