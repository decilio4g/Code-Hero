import React from "react";
import { CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";

import Search from "components/Search/index";
import ListItem from "components/List";
import {
  Container,
  WrapperContent,
  ContentTitle,
  ContentSearch,
  ContentList,
  ContainerProgressBar,
} from "./styles";

function Dashboard({
  search,
  setSearch,
  results,
  charactersId,
  setCharactersId,
}) {
  return (
    <Container>
      <WrapperContent>
        <ContentTitle>Busca de personagens</ContentTitle>

        <ContentSearch>
          <Search
            title="Nome do personagem"
            placeholder="Search"
            search={search}
            setSearch={setSearch}
          />
        </ContentSearch>
      </WrapperContent>

      <ContentList>
        {!results.length ? (
          <ContainerProgressBar>
            <CircularProgress />
          </ContainerProgressBar>
        ) : (
          <ListItem
            charactersId={charactersId}
            setCharactersId={setCharactersId}
            results={results}
          />
        )}
      </ContentList>
    </Container>
  );
}

Dashboard.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  results: PropTypes.array,
  charactersId: PropTypes.string,
  setCharactersId: PropTypes.func,
};

Dashboard.defaultProps = {
  search: "",
  setSearch: () => {},
  results: [],
  charactersId: "",
  setCharactersId: () => {},
};

export default Dashboard;
