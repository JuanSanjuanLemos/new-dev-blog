import styled from "styled-components";

export const BoxImg = styled.div`
  width: 100%;
  padding-bottom: 30%;
  position: relative;
  .post-title{
    position: absolute;
    font-size: 3rem;
    border: none;
    background-color: #00000094;
    padding: 1rem;
    box-shadow: 0px 0px 28px 0px #020202;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;

export const WrapperCarousel = styled.div`
  width: 80%;
  margin: auto;
  .carousel{
    width: 100%;
    ul{
      list-style: none;
    }
    .swiper-pagination-bullet {
  background-color: #3BCBDE !important;
}
  }
`;