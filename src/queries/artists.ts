import { gql } from "@apollo/client";

const QUERY_ARTISTS = gql`
  query ($query: String!) {
    queryArtists(byName: $query) {
      name
      id
      image
      albums {
        name
        image
      }
    }
  }
`;

export default QUERY_ARTISTS;
