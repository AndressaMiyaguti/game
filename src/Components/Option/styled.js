import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  background-image: url("https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/1259c93c5339ab3430d4f302/page_bg_brazilian.jpg?t=1637170916");
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.9) contrast(1.1) saturate(1.7);
  width: 100%;
  height: 25rem;
  justify-content:center;


  @media(max-width: 800px){
    justify-content:left;
    align-items: flex-start;
    
  }
`;

 

export const OptionsText = styled.ul`
  background-color: #305d8a;
  color: #ffffff;
  width: 750px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin:2rem 3rem;
  border-radius: 3px;


  @media(max-width: 800px){
    flex-direction: column-reverse;
    text-align: left;
    width: 250px;
    height: 20rem;
    justify-content: left;
    align-items: flex-start;
    margin: 0;
    background-color: transparent;
    
  }
`;
export const ListItem = styled.li`

height: 2rem;
  list-style: none;
  transition: 200ms;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;
  font-size: 13px;
  text-shadow: 0px 2px 3px rgb(0 0 0 / 30%);
`;
export const Span = styled.span`

  line-height: 34px;
`;
export const LinkedPage = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
export const ImgList = styled.img`
width: 25px;
` 
export const Input = styled.input`
  background-color: #316282;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  margin-top: 1px;
  font-style: italic;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 0px rgb(255 255 255 / 20%);
  outline: none;
  height: 27px;
  padding: 0px 6px;
  z-index: 150;
  margin: 0;

  &::placeholder {
    color: black;
  }
`;
export const Lupa = styled.img`
margin:0;
width: 30px;
height: 27px;
` 
export const DivInput=styled.div`
display: flex;
flex-wrap: nowrap;
`
