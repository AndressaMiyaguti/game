import * as S from "./styled";
/* import {Fifa} from './../Images/Imagens' */
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

export default function Carousel(props) {
  /*  const Image = [ ...Object.values( Fifa )]
 console.log(Image) */

  const [game, setGame] = useState([]);
  const [mounted, setMounted] = useState(false);
  console.log(game);
  const getData = async () => {
    await axios.get(`/game/find/${props.id}`).then((response) => {
      if (mounted) {
        setGame(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);
  console.log(game.image);
  return (
    <>
      <S.DivInfoCarousel>
        <S.Carousel>
          <S.CarouselImg src={game.image} alt={game.name} />
        </S.Carousel>
        <S.DivInfo>
          <S.DivText>Já disponível</S.DivText>
          <S.Classif>
            <S.Text>{props.classificationNumber}</S.Text>
            <S.TextP>{props.classificationText}</S.TextP>
          </S.Classif>
        </S.DivInfo>
        {/*  <S.Carousel>
   { Image.map((item) => {
     console.log(item)
     return(
     <S.CarouselImg key={item} src={item} />
     )
   })}
     
     </S.Carousel> */}
      </S.DivInfoCarousel>
    </>
  );
}
