import * as S from "./styled";
import Icon from "./icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Card(props) {
  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate("/game", { state: props.id });
  };

  const wishGame = async (id) => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      axios.get(`/game/wish/${id}`, config);
      console.log("requi");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Card>
      <S.CardItem onClick={goToGamePage}>
        <S.CardImage src={props.image} alt={props.title} />

        <S.CardText>{props.title}</S.CardText>
      </S.CardItem>
      <S.DivInfo>
        <S.CardPreco>{"R$ " + props.preco}</S.CardPreco>

        <S.DivIcon>
          <S.Wishlist
            onClick={() => {
              wishGame(props.id);
            }}
          >
            <S.Icon src={Icon} />
          </S.Wishlist>
        </S.DivIcon>
      </S.DivInfo>
    </S.Card>
  );
}
