import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyle from "./components/style/globalstyle";
import App from "./App";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SPOTIFY_ENDPOINT as string,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
