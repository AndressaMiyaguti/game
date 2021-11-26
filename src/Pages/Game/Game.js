import * as S from "./styled";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Game() {
  const state = useLocation();
  const id = state.state;

  const [game, setGame] = useState({});
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${id}`).then((response) => {
      if (mounted) {
        setGame(response.data);
        console.log(game);
      }
    });
  };
  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <S.Game>
      <S.GameHeaderImg src={game.image} alt={game.name} />

      <S.GameWish>
        <S.GameH2>{game.name}</S.GameH2>
        <S.GameLike>
          <span>R$ {game.price}</span>
          {/*     <S.GameWishLink>
          
          </S.GameWishLink> */}
        </S.GameLike>
      </S.GameWish>
      <S.GameH3>{game.year} </S.GameH3>
      <S.GameP>{game.storyline}</S.GameP>
    </S.Game>
  );
}
