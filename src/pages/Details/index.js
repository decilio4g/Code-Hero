import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  Container,
  ContentTop,
  NameCharacter,
  Image,
  Description,
  Footer,
  Button,
  ContentCenter,
  ListItem,
  Item,
  Title,
} from "./styles";

function Details({ PublicKey, charactersId, setCharactersId }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${charactersId}?apikey=${PublicKey}`
      )
      .then((response) => {
        setCharacter(response.data.data.results[0]);
      });
  }, [PublicKey, charactersId]);

  return (
    <Container>
      <ContentTop>
        <NameCharacter>{character.name}</NameCharacter>
        <Image
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        />
        <Description>{character?.description}</Description>
      </ContentTop>

      <ContentCenter>
        <Title>Stories</Title>
        <ListItem>
          {character?.stories?.items?.map((item, index) => {
            return <Item key={index}>{item.name}</Item>;
          })}
        </ListItem>
      </ContentCenter>

      <Footer>
        <Button onClick={() => setCharactersId("")}>Voltar</Button>
      </Footer>
    </Container>
  );
}

export default Details;
