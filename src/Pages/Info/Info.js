import * as S from "./styled";

export default function Info() {
  return (
    <>
      <S.DivInfo>
        <S.DivTitle>Importante</S.DivTitle>
        <S.DivText>
          <S.SubTitle>Olá,</S.SubTitle>
          <S.Text>
            Primeiramente agradeço por percorrer o site, e testar as opções de
            direcionamento.
          </S.Text>
          <S.Text>Essa página esta em construção </S.Text>
          <S.InfoLink to={"/"}>
            <S.Button>HOME</S.Button>
          </S.InfoLink>
        </S.DivText>
      </S.DivInfo>
    </>
  );
}
