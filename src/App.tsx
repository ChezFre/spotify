import { useState, useEffect, useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import QUERY_ARTISTS from "./queries/artists";
import { TArtist } from "./types/artist";
import Layout from "./components/layout/Layout";
import Artists from "./components/artists/Artists";
import ArtistDetail from "./components/artist/ArtistDetail";

function App() {
  const [query, setQuery] = useState("");
  const [selectedArtist, setSelectedArtist] = useState<TArtist | void>();
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
    if (selectedArtist)
      return (
        <ArtistDetail
          name={selectedArtist.name}
          image={selectedArtist.image}
          albums={selectedArtist.albums}
        />
      );

    if (data?.queryArtists.length)
      return (
        <Artists
          artists={data?.queryArtists}
          selectArtist={setSelectedArtist}
        />
      );

    return <div>No results</div>;
  }, [query, loading, error, selectedArtist, data?.queryArtists]);

  return (
    <Layout
      onBackClick={() => setSelectedArtist()}
      backEnabled={!!selectedArtist}
      handleSearch={setQuery}
    >
      {renderApp()}
    </Layout>
  );
}

export default App;
