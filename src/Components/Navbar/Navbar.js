import * as S from "./styled";

export default function Navbar() {
  return (
    <S.Navbar>
      <S.NavbarDireita>
        <S.DivInstall>
          <S.Install
            src={
              "https://store.cloudflare.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1"
            }
          />
          <S.InstallLink href={"https://store.steampowered.com/about/"}>
            <S.Span>Instale o Steam</S.Span>
          </S.InstallLink>
        </S.DivInstall>
        <S.LinkedPage to={"/login"}>
          <S.Iniciar>
            iniciar sessão<S.IniciarSpan>|</S.IniciarSpan>{" "}
          </S.Iniciar>
        </S.LinkedPage>
        <S.LinkedPage to={"/register"}>
          <S.Iniciar>
            cadastro <S.Seta>▼ </S.Seta>
          </S.Iniciar>
        </S.LinkedPage>
      </S.NavbarDireita>

      <S.NavbarSteam>
        <S.LinkedPage to={"/"}>
          <S.Img
            src={
              "https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
            }
            alt=""
          />
        </S.LinkedPage>
        <S.List>
          <S.ListItem>
            <S.Ahref href={"https://store.steampowered.com/"}>LOJA</S.Ahref>
          </S.ListItem>

          <S.ListItem>
            <S.LinkedPage to={"/wishlist"}>FAVORITOS</S.LinkedPage>
          </S.ListItem>

          <S.ListItem>
            <S.LinkedPage to={"/profile"}>PERFIL</S.LinkedPage>
          </S.ListItem>

          <S.ListItem>
            <S.Ahref href={"https://help.steampowered.com/pt/"}>
              SUPORTE
            </S.Ahref>
          </S.ListItem>
        </S.List>
      </S.NavbarSteam>
    </S.Navbar>
  );
}
