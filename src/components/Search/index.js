import React from "react";
import PropTypes from "prop-types";

import { IconButton, OutlinedInput, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { Container, SearchTitle } from "./styles";

function Search({ title, placeholder, search, setSearch, ...props }) {
  return (
    <Container>
      <SearchTitle>{title}</SearchTitle>
      <OutlinedInput
        id="input"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Container>
  );
}

Search.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

Search.defaultProps = {
  title: "",
  placeholder: "",
  search: "",
  setSearch: () => {},
};

export default Search;
