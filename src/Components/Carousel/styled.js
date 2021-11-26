import styled from "styled-components";

export const Carousel = styled.div`
  width: 900px;
  height: 353px;
  margin: 1rem 4rem;
  justify-content: center;

  @media (max-width: 1260px) {
    width: 0;
    height: 0;
    z-index: 0;
  }
`;
export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const Classif = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const Text = styled.p`
  background-color: #2193d1;
  height: 0.5rem;
  width: 1rem;
  border-radius: 0.8rem;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 1em;
`;
export const DivInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const DivInfoCarousel = styled.div`
  border: 2px solid #2a475e;
  border-radius: 10px;

  @media (max-width: 1260px) {
    opacity: 0;
    width: 0;
    height: 0;
    z-index: 0;
  }
`;

export const DivText = styled.p`
  font-size: 1.6em;
  font-weight: 700;
  color: #d94126;
  width: 30%;
  margin-top: 0;
`;
export const TextP = styled.p`
  padding: 0 1rem;
  width: 20rem;
  color: #484848;
  font-size: 0.8em;
`;
