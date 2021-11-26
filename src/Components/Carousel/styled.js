import styled from "styled-components";

export const Carousel = styled.div`
  border: 1px solid red;
  width: 900px;
  height: 353px;
  margin: 1rem 4rem;
  justify-content: center;
  display: none;
  overflow: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

export const DivCarousel = styled.div`
display: flex;
`

    export const CarouselImg= styled.img`
    width: 100%;
    height: 100%;
    ` 
