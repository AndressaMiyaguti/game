import * as S from "./styled";
import Card from "./../../Components/Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WishList() {
  const [wishList, setWishList] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLoggend] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/game/myWishList", config).then((response) => {
        setNotLoggend(false);
        setWishList(response.data.games);
        console.log(response);
      });
    }
  }, [mounted]);

  return (
    <>
      <S.WhishList>
        <S.WhishTitle>Lista de Desejos</S.WhishTitle>

        <S.DivWishList>
          <S.Wish>
            {wishList.map((game) => (
              <Card
                id={game.id}
                image={game.image}
                title={game.name}
                preco={game.price}
                key={game.id}
              />
            ))}
          </S.Wish>
        </S.DivWishList>
      </S.WhishList>
    </>
  );
}
