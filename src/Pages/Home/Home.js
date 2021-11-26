import Card from "./../../Components/Card/Card";
import * as S from "./styled";
import ContLeft from "./../../Components/ContLeft/ContLeft";
import Options from "./../../Components/Option/Option";
import Container from "./../../Components/Container/Container";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("/game/findMany").then((response) => {
      if (mounted) {
        setGames(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <>
      <Options />
      <Container>
        {" "}
        <ContLeft />
      </Container>
      <S.CardList>
        <S.CardListInfo> Mais vendido </S.CardListInfo>
        {games.map((game) => (
          <Card
            id={game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
            key={game.id}
          />
        ))}
      </S.CardList>
    </>
  );
}
