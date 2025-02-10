import React, { useState } from "react";

const SearchInput = ({onSearchSubmit}) => {
  const [entry, setEntry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(entry);
  };
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <div className="ui massive icon input">
            <input
              type="text"
              name="search"
              placeholder="search..."
              onChange={(event) => {
                setEntry(event.target.value);
              }}
              value={entry}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchInput;
