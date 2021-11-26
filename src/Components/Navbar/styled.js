import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171a21;
  width: 100%;
  height: 5rem;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 14px;
  color:#b8b6b4;
`;

export const Seta = styled.span`
  font-size: 9px;  
`;

export const NavbarSteam = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
   
  @media(max-width: 450px){
    font-size: 0.8em;
  }
`;

export const NavbarDireita = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end; 

  @media(max-width: 600px){
    justify-content:center;
    align-items:center;
  }
`;

export const DivInstall = styled.div`
  background-color: #5c7e10;
  width: 125px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  border-radius: 2px;
  
`;
export const Ahref= styled.a`
 text-decoration: none;
  color:#b8b6b4; 
`
export const InstallLink = styled.a`
color: #e5e4dc;
font-size:0.9em;
text-decoration: none;
`

export const Install = styled.img`
   width:15px;
   height:14px;  
`;
export const Span = styled.p``;

 export const Img = styled.img`
  width: 190px;
  height: 50px;
  aspect-ratio: auto 176 / 44;
  margin-top: -0.5rem;  

  @media(max-width: 600px){
    opacity: 0;
    z-index: 0;
    width: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  margin-top: 0;  
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem 1rem;
  transition: 200ms;  
`;

export const LinkedPage = styled(Link)`
  text-decoration: none;
  color:#b8b6b4; 
`;

export const Iniciar = styled.a`
  font-size: 13px;
  padding: 4px;
  color:#b8b6b4;
`;

export const IniciarSpan = styled.span`
  padding: 0 1.3rem;
  font-size: 16px; 
`;
