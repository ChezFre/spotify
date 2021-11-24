import { FC, useState, useMemo, useEffect } from "react";
import debounce from "just-debounce-it";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";
import { ReactComponent as MagnifyingGlass } from "../../assets/search.svg";
import * as styled from "./Search.styled";

type TProps = {
  onSearch: (query: string) => void;
};

const Search: FC<TProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedSearch = useMemo(() => debounce(onSearch, 350), [onSearch]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    debouncedSearch(query);
  };

  return (
    <styled.Form
      action="/"
      method="post"
      onSubmit={handleSearch}
      noValidate
      acceptCharset="utf-8"
      role="search"
    >
      <styled.SearchBar
        enterKeyHint="search"
        type="search"
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          debouncedSearch(event.currentTarget.value);
        }}
        required
        value={query}
      />
      <styled.Submit type="submit">
        <MagnifyingGlass />
        <VisuallyHidden>Search</VisuallyHidden>
      </styled.Submit>
    </styled.Form>
  );
};

export default Search;
