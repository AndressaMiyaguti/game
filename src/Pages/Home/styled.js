import styled from "styled-components";

export const CardList = styled.div`
border: 1px solid red;
width: 97%;
display: flex;
flex-wrap: wrap;
justify-content:space-between;
border: 1px solid #2A475E;
border-radius:10px;
margin: 0 auto;

@media(max-width:890px){
  flex-direction: column;
  width: 75%;
  align-items: center;
  justify-content: center;
  
  
}
@media (max-width: 600px){
  float: right;
  width: 100%;
  height:25rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  scroll-behavior: auto;
  align-items: center;
  justify-content: center;
}


`


export const CardListInfo = styled.h3`

width: 100%;
height: 2rem;
color: #e5e4dc;
font-size:1em;
display: flex;
justify-content:center;
text-align: center;
font-family: "Motiva Sans", Sans-serif;
`