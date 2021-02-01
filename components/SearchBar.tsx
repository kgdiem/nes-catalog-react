import React, { useState, useCallback } from "react";
import debounce from 'lodash.debounce';

export interface SearchBarPropTypes {
  onChange: (val: string) => void;
}

export const SearchBar = ({ onChange }: SearchBarPropTypes) => {
  const [query, setQuery] = useState('');
  const debouncedSearch = useCallback(
		debounce(val => onChange(val), 500),
		[]
	);

  const search = (val: string) => {
    setQuery(val);
    debouncedSearch(val);
  }

  return (
    <div className="nes-field mb-20">
      <input
        type="text"
        className="nes-input"
        placeholder="Search for titles"
        value={query}
        onChange={e => search(e.target.value)}
      />
    </div>
  );
};
