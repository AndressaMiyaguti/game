import * as S from './styled';
import Navbar from "./../../Components/Navbar/Navbar";

export default function Info (){
  return(
    <>
    <Navbar/>
    <S.DivInfo>
      <S.DivTitle>Importante</S.DivTitle>
      <S.DivText>
        <S.SubTitle>Olá,</S.SubTitle>
        <S.Text>Primeiramente agradeço por percorrer o site, e testar as opções 
          de direcionamento. 
        </S.Text>
        <S.Text>O layout da página foi inspirado na Home da Steam. Alguns campos foram clonados
          fielmente ao original, porém sem rotas adicionadas. </S.Text>
          <S.Text>Abaixo estão a descrição dos links disponíveis na página</S.Text>
        <S.Ul>
          <S.Li>FAVORITOS <S.Span> - Direciona para a página de Jogos selecionados para a lista de desejos</S.Span></S.Li>
          <S.Li>IMAGEM STEAM <S.Span> - Direciona para a página principal (Home)</S.Span></S.Li>
          <S.Li>CARD <S.Span> - Os Card localizado em "Mais Vendidos"</S.Span></S.Li>
        </S.Ul>
      </S.DivText>
    </S.DivInfo>
    </>
  )
}