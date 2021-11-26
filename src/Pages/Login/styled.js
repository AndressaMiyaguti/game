import styled from "styled-components";
import { Link } from 'react-router-dom'

export const DivLogin = styled.div`
width: 100%;
display:flex;
color: #e5e4dc;

@media (max-width: 560px){
  flex-direction: column;
}
`
export const DivLeft = styled.div`
display: flex;
justify-content:flex-end;
width: 55%;
height: 600px;
background-position: -60em;
background-size: contain;
background-image: url("https://store.akamai.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg");

@media (max-width: 960px){
  
  width: 100%;
}

`
export const DivButton = styled.div`
display: flex;
width: 60%;
justify-content:center;


@media (max-width: 960px){
  width:100%;
}
`
export const DivRight = styled.div`
background-color: #212429;
width: 45%;
display: flex;
flex-direction: column;

@media (max-width: 560px){
  width:100%;
}
`
export const DivData = styled.div`

width: 50%;
height: 500px;
background: radial-gradient(50% 80% at 110% 30%, #3D4450 -20%, #212429 100%);

@media (max-width: 960px){
  width:100%;
  display: flex;
  justify-content: center;
  margin-left: 3rem;
}
`

export const Menu = styled.div`
width: 100%;
margin: 1rem;
`
export const Text = styled.p`
font-size: 1.5em;
width: 100%;

`
export const DivRightCenter= styled.div`
margin-top:2rem;
margin-bottom: 3rem;

@media (max-width: 960px){
  justify-content: center;
}
`
export const TextRight = styled.p`
font-size: 0.8em;
width: 40%;
margin-left: 4rem;
text-align: justify;
`
export const Span = styled.p`
width: 100%;
text-align: center;
font-weight: bold;

`
export const ButtonCad = styled.button`
background: transparent;
color: #e5e4dc;
border: 1px solid #e5e4dc;
display: flex;
justify-content: center;
align-items: center;
width: 8rem;
height: 2rem;
border-radius:3px;
cursor: pointer;
`

export const ImageRight = styled.div`
background-image: url("https://store.akamai.steamstatic.com/public/shared/images/login/join_pc.png?v=1");
width: 320px;
height: 220px;
background-size: contain;
object-fit: cover;
margin-top:0;
`
export const TextP = styled.p`
font-size: 0.8em;
text-align: center;
width: 15rem;

`
export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;


`
export const Label = styled.label`
font-size: 14px;
color: #b8b6b4;
margin-bottom: 10px;
padding: 5px;

`
export const Input = styled.input`

    width: 15rem;
    background: #32353C;
    border-radius: 3px;
    color: #E9E9E9;
    padding: 8px 6px;
    display: block;
    box-shadow: none;
    transition: border ease-in-out .5s;
    border: 1px solid #26282D;
    outline: none;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
`
export const Button = styled.button`
text-shadow: 1px 1px 0px rgb(0 0 0 / 30%);
color: #c3e1f8;
border-radius: 2px;
background: linear-gradient( to right, #47bfff 5%, #1a44c2 60%);
box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
background-position: 25%;
background-size: 330% 100%;
border: none;
text-decoration: none;
width: 14rem;
height:1.8rem;
margin-top: 1rem;
margin-left: 1rem;
cursor: pointer;


`

export const LinkedPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;

`;