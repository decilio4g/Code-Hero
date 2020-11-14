import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  ContentList,
  Image,
  Name,
  Series,
  Item,
  ItemText,
  Event,
  Text,
  ContainerCharacter,
  ContentNameImage,
  ContentEvent,
  ContentSeries,
} from "./styles";

function List({ results, charactersId, setCharactersId }) {
  return (
    <Container>
      <ContainerCharacter>
        <Text id="character">Personagem</Text>
        <Text id="series">Séries</Text>
        <Text id="event">Eventos</Text>
      </ContainerCharacter>

      {results.map((result) => {
        const items = result.series.items.slice(1, 3);
        const events = result.events.items.slice(1, 3);

        return (
          <ContentList
            onClick={() => setCharactersId(result.id)}
            key={result.id}
          >
            <ContentNameImage>
              <Image
                src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
              />

              <Name>{result.name}</Name>
            </ContentNameImage>

            <ContentSeries>
              <Series>
                {items.map((item, index) => (
                  <Item key={index}>
                    <ItemText>{item.name}</ItemText>
                  </Item>
                ))}
              </Series>
            </ContentSeries>

            <ContentEvent>
              <Event>
                {events.map((item, index) => (
                  <Item key={index}>
                    <ItemText>{item.name}</ItemText>
                  </Item>
                ))}
              </Event>
            </ContentEvent>
          </ContentList>
        );
      })}
    </Container>
  );
}

List.propTypes = {
  results: PropTypes.array,
  charactersId: PropTypes.string,
  setCharactersId: PropTypes.func,
};

List.defaultProps = {
  results: [],
  charactersId: "",
  setCharactersId: () => {},
};

export default List;
