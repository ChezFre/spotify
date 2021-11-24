import { useState } from "react";
import Layout from "./components/layout/Layout";

function App() {
  const [query, setQuery] = useState("");

  return (
    <Layout onBackClick={console.log} handleSearch={setQuery}>
      {query}
    </Layout>
  );
}

export default App;
