import * as S from "./styled";

export default function Options() {
  return (
    <S.Options>
      <S.OptionsText>
        <S.ListItem>
          <S.LinkedPage to="">Sua loja</S.LinkedPage>
        </S.ListItem>
        <S.ListItem>
          <S.LinkedPage to="">
            <S.ImgList
              src={
                "https://store.cloudflare.steamstatic.com/public/images/v6/storemenu/new_white.svg?v=2"
              }
            />
          </S.LinkedPage>
          <S.Span>Novidades e tendências</S.Span>
        </S.ListItem>
        <S.ListItem>
          <S.LinkedPage to="">
            <S.ImgList
              src={
                "https://store.cloudflare.steamstatic.com/public/images/v6/storemenu/new_white.svg?v=2"
              }
            />
          </S.LinkedPage>
          <S.Span>Categorias</S.Span>
        </S.ListItem>
        <S.ListItem>
          <S.LinkedPage to="">Loja de pontos</S.LinkedPage>
        </S.ListItem>
        <S.ListItem>
          <S.LinkedPage to="">Notícias</S.LinkedPage>
        </S.ListItem>
        <S.ListItem>
          <S.LinkedPage to="">Laboratório</S.LinkedPage>
        </S.ListItem>
        <S.DivInput>
          <S.Input placeholder="Buscar"></S.Input>
          <S.Lupa
            src={
              "https://store.cloudflare.steamstatic.com/public/images/v6/search_icon_btn.png"
            }
          />
        </S.DivInput>
      </S.OptionsText>
    </S.Options>
  );
}
