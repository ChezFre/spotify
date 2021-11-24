import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyle from "./components/style/globalstyle";
import App from "./App";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SPOTIFY_ENDPOINT,
  cache: new InMemoryCache(),
});

let FatalError;

if (!process.env.REACT_APP_SPOTIFY_ENDPOINT) {
  FatalError = React.lazy(
    () => import("./components/states/fatal-error/FatalError")
  );
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle fatalError={!!FatalError} />
    <Suspense fallback={<div />}>
      {FatalError ? (
        <FatalError />
      ) : (
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      )}
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
