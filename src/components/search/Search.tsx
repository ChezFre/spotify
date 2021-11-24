import { FC } from "react";

type TProps = {
  onSearch: (query: string) => void;
};

const Search: FC<TProps> = ({ onSearch }) => <span>Search</span>;

export default Search;
