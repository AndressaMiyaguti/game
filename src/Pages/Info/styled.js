import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DivTitle = styled.h1`
  color: #e5e4dc;
`;

export const DivText = styled.div`
  width: 60%;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Button = styled.button`
  text-shadow: 1px 1px 0px rgb(0 0 0 / 30%);
  color: #c3e1f8;
  border-radius: 2px;
  background: linear-gradient(to right, #47bfff 5%, #1a44c2 60%);
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  background-position: 25%;
  background-size: 330% 100%;
  border: none;
  text-decoration: none;
  width: 10rem;
  height: 1.8rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
export const SubTitle = styled.h2`
  color: #e5e4dc;
`;
export const InfoLink = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  padding: 0 0 0 1rem;
`;
export const Text = styled.p`
  font-size: 1.5em;
`;

export const Ul = styled.ul`
  font-size: 1.5em;
`;
export const Li = styled.li`
  color: #e5e4dc;
`;
export const Span = styled.span`
  font-size: 0.8em;
  color: black;
`;
