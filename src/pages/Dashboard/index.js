import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "js-md5";
import PaginationItem from "@material-ui/lab/Pagination";

import LogoObjective from "assets/logo-obj.png";
import DashComponent from "components/Dashboard";
import Details from "pages/Details";

import {
  AnimationContainer,
  Container,
  Header,
  LogoImage,
  Profile,
  UserName,
  Name,
  Description,
  Options,
  Option,
  Content,
  ContentWeb,
  ContentMobile,
  Footer,
  Pagination,
} from "./styles";

export default function Dashboard() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  const [charactersId, setCharactersId] = useState("");

  const timestamp = Number(new Date());
  const hash = md5.create();
  const PUBLIC_KEY = "725d2650e07cae334c6adcdf7d361759";

  hash.update(
    timestamp + "a57e6c740b63d9dee1550b1279db97488e71b537" + PUBLIC_KEY
  );

  useEffect(() => {
    if (search !== "") {
      return axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?name=${search}&apikey=${PUBLIC_KEY}`
        )
        .then((response) => setResults(response.data.data.results));
    }

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&offset=${page}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      )
      .then((response) => {
        const { results, count } = response.data.data;

        setCount(count);
        setResults(results);
      });
  }, [search, page]);

  return (
    <Container>
      <Header>
        <LogoImage src={LogoObjective} alt="Logo Objective" />

        <Profile>
          <UserName>
            <Name>Gabriel Decilio</Name>
            <Description>Teste de Front-end</Description>
          </UserName>
          <Options>
            <Option>CB</Option>
          </Options>
        </Profile>
      </Header>

      <Content>
        <ContentWeb>
          <DashComponent
            search={search}
            setSearch={setSearch}
            results={results}
          />
        </ContentWeb>

        <ContentMobile>
          {!charactersId ? (
            <DashComponent
              charactersId={charactersId}
              setCharactersId={setCharactersId}
              search={search}
              setSearch={setSearch}
              results={results}
            />
          ) : (
            <AnimationContainer>
              <Details
                charactersId={charactersId}
                setCharactersId={setCharactersId}
                PublicKey={PUBLIC_KEY}
              />
            </AnimationContainer>
          )}
        </ContentMobile>
      </Content>

      <Footer>
        <Pagination>
          <PaginationItem
            value={page}
            onChange={(_, page) => setPage(page)}
            count={count}
            variant="outlined"
            shape="rounded"
          />
        </Pagination>
      </Footer>
    </Container>
  );
}
