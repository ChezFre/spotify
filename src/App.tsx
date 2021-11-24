import { useState, useEffect, useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import QUERY_ARTISTS from "./queries/artists";
import { TArtist } from "./types/artist";
import Layout from "./components/layout/Layout";

function App() {
  const [query, setQuery] = useState("");
  const [loadArtists, { loading, data, error }] = useLazyQuery<{
    queryArtists: TArtist[];
  }>(QUERY_ARTISTS, {
    variables: {
      query,
    },
  });

  useEffect(() => {
    if (query) {
      loadArtists();
    }
  }, [query, loadArtists]);

  const renderApp = useCallback(() => {
    if (!query) return <div>Initial state</div>;
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error {error.message}</div>;

    if (data?.queryArtists.length)
      return JSON.stringify(data?.queryArtists, null, 2);

    return <div>No results</div>;
  }, [error, loading, query, data]);

  return (
    <Layout onBackClick={console.log} handleSearch={setQuery}>
      {renderApp()}
    </Layout>
  );
}

export default App;
