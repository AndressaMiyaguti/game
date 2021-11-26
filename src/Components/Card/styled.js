import styled from "styled-components";

export const Card = styled.div`
  margin: 0 0.8rem 1rem;
  border: 4px solid #e5e4dc;
  border-radius: 10px;
  background-color: #2a475e;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 19rem;
`;
export const DivIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const CardItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #e5e4dc;
`;

export const CardImage = styled.img`
  width: 17rem;
  height: 10rem;
  border-radius: 0.4rem;
`;

export const CardText = styled.h2`
  padding: 0 0.5rem;
  font-size: 1em;
  height: 62px;
`;
export const DivInfo = styled.div`
  width: 100%;
  display: flex;
  background-color: #e5e4dc;
  border-radius: 5px;
`;
export const CardPreco = styled.span`
  padding: 0 0.5rem;
  width: 100%;
  padding-top: 1.9rem;
  font-weight: bold;
  color: #000;
`;

export const Wishlist = styled.button`
  font-size: 1.4em;
  padding: 0.5rem 0.8rem;
  display: flex;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
