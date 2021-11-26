import * as S from "./styled";
import { useState } from "react";
import axios from "axios";
import Icon from "./icon.png";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      await axios
        .post("https://nintendo-shop.herokuapp.com/user/register", user)
        .then((response) => {
          const status = response.status;
          if (status === 201 || 200) {
            alert("Perfil cadastrado com sucesso.");
            history("/login", {});
          }
        });
    } catch (e) {
      if (Error === 409 || "Conflict") {
        alert("Dados já cadastrado ");
      }
      console.log(e);
    }
  };
  return (
    <>
      <S.DivReg>
        <S.DivLeft>
          <S.DivData>
            <S.Menu>
              <S.Text>CADASTRAR-SE</S.Text>
              <S.Form onSubmit={handleSubmit}>
                <S.Label>
                  Nome de usuário Steam
                  <S.Input
                    type="text"
                    required
                    onChange={(event) => setName(event.target.value)}
                  />
                </S.Label>

                <S.Label>
                  Nickname
                  <S.Input
                    type="text"
                    required
                    onChange={(event) => setNickname(event.target.value)}
                  />
                </S.Label>

                <S.Label>
                  Endereço de e-mail
                  <S.Input
                    type="email"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </S.Label>

                <S.Label>
                  Senha
                  <S.Input
                    type="password"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </S.Label>

                <S.Label>
                  Confirmar senha
                  <S.Input
                    type="password"
                    required
                    onChange={(event) =>
                      setPasswordConfirmation(event.target.value)
                    }
                  />
                </S.Label>

                <S.DivCheckbox>
                  <S.CheckArea>
                    <S.CheckAreaText>
                      <S.Input type="checkbox" required />
                      <S.CheckAreaP>Não sou um robô</S.CheckAreaP>
                    </S.CheckAreaText>

                    <S.CheckAreaDivImg>
                      <S.CheckAreaImg src={Icon} />
                      <S.SpanText>Privacidade-Termos</S.SpanText>
                    </S.CheckAreaDivImg>
                  </S.CheckArea>

                  <S.DivPrivacidade>
                    <S.Input type="checkbox" required />
                    <S.TextPrivacidade>
                      {" "}
                      Tenho 13 anos de idade ou mais e aceito os termos do
                      Acordo de Assinatura do Steam e da
                    </S.TextPrivacidade>
                  </S.DivPrivacidade>
                  <S.LinkedPage
                    href={"https://store.steampowered.com/privacy_agreement/"}
                    target={"_blank"}
                  >
                    <S.SpanCheckbox>
                      Política de Privacidade da Valve.
                    </S.SpanCheckbox>
                  </S.LinkedPage>
                </S.DivCheckbox>

                <S.Button type="submit">Continuar </S.Button>
              </S.Form>
            </S.Menu>
          </S.DivData>
        </S.DivLeft>
      </S.DivReg>
    </>
  );
}
