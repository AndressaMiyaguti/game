import * as S from "./styled";
import Carousel from "./../Carousel/Carousel";
import { Gif } from "./ContGif/Gif";

export default function Container(props) {
  return (
    <S.Container>
      <S.ContainerLeft>{props.children}</S.ContainerLeft>
      <S.ContainerCenter>
        <S.CenterTop>
          <Carousel
            id="4f969d05-ee63-4153-8bb4-66a55818e2ef"
            classificationText="Este jogo pode conter conteúdo não apropriado para todas as idades: violência frequente ou sangrenta, conteúdo adulto geral"
            classificationNumber="18 +"
          />
        </S.CenterTop>
        <S.CenterVideos>
          <S.CenterVideoText> RECOMENDAÇÕES DA COMUNIDADE</S.CenterVideoText>
          <S.CardGif>
            <S.Gif src={Gif.GifTerraria} />
            <S.GifName>TERRARIA</S.GifName>
          </S.CardGif>

          <S.CardGif>
            <S.Gif src={Gif.GifHalo} />
            <S.GifName>HALO INFINITE</S.GifName>
          </S.CardGif>

          <S.CardGif>
            <S.Gif src={Gif.GifBattle} />
            <S.GifName>BATTLEFIELD</S.GifName>
          </S.CardGif>

          <S.CardGif>
            <S.Gif src={Gif.GifDarkest} />
            <S.GifName>DARKEST KING</S.GifName>
          </S.CardGif>
        </S.CenterVideos>
      </S.ContainerCenter>
    </S.Container>
  );
}
