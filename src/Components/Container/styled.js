import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContainerLeft = styled.div`
  width: 35%;
`;
export const ContainerCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const CenterTop = styled.div``;

export const CenterVideos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #2a475e;
  border-radius: 10px;
  margin: 2rem 0;

  @media (max-width: 890px) {
    flex-direction: column;
    width: 75%;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 600px) {
    float: right;
    width: 100%;
    height: 25rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    scroll-behavior: auto;
    align-items: center;
    justify-content: center;
  }
`;
export const CenterVideoText = styled.h3`
  width: 100%;
  height: 2rem;
  color: #e5e4dc;
  font-size: 1em;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CardGif = styled.div`
  border: 2px solid #2a475e;
  border-radius: 10px;
  background-color: #2a475e;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  height: 13rem;
  margin: 1rem;
`;
export const GifName = styled.p`
  color: #e5e4dc;
`;

export const Gif = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 8px;
`;
