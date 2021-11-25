import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDocumentTitle } from "@mantine/hooks";
import QUERY_ARTISTS from "./queries/artists";
import { TArtist } from "./types/artist";
import Layout from "./components/layout/Layout";
import Artists from "./components/artists/Artists";
import Initial from "./components/states/initial/Initial";
import Loading from "./components/states/loading/Loading";
import Error from "./components/states/error/Error";
import NoResults from "./components/states/no-results/NoResults";
import mock from "./mock.json";
const ArtistDetail = lazy(() => import("./components/artist/ArtistDetail"));

function App() {
  const [query, setQuery] = useState("");
  const [selectedArtist, setSelectedArtist] = useState<TArtist | void>();
  const [loadArtists, { loading }] = useLazyQuery<{
    queryArtists: TArtist[];
  }>(QUERY_ARTISTS, {
    variables: {
      query,
    },
  });

  const data = query === "no results" ? { queryArtists: [] } : mock;

  useDocumentTitle(
    `${
      selectedArtist
        ? `${selectedArtist.name} | Artist`
        : `${query ? `${query} | Overview` : "Overview"}`
    } | Spotify`
  );

  useEffect(() => {
    if (query) {
      loadArtists();
    }
  }, [query, loadArtists]);

  const renderApp = useCallback(() => {
    const error =
      query === "error" ? { message: "You did this to me" } : undefined;

    if (!query) return <Initial />;
    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;
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

    return <NoResults query={query} />;
  }, [query, loading, selectedArtist, data?.queryArtists]);

  return (
    <Layout
      onBackClick={() => setSelectedArtist()}
      backEnabled={!!selectedArtist}
      handleSearch={setQuery}
    >
      <Suspense fallback={<div />}>{renderApp()}</Suspense>
    </Layout>
  );
}

export default App;
