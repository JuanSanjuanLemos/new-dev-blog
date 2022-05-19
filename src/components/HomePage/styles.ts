import styled, { keyframes } from "styled-components";

const sizeView = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;

export const Container = styled.main`
  .banner {
    position: relative;
    padding-bottom: 50%;
  }
  .content {
    max-width: 1160px;
    margin: auto;

    .load-more {
      color: #3bcbde;
      cursor: pointer;
      transition: all 0.2s linear;
      text-align: center;
      margin-bottom: 3rem;
      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;

export const BoxBanner = styled.div`
  animation: ${sizeView} 2s linear;
  margin: auto;
  height: 400px;
  position: relative;
  img{
    object-fit: cover;
  }
  .text{
    margin: 1rem;
    z-index: 3;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,100%);
    margin: auto;
    h1{
      text-align: center;
      color:#3BCBDE;
      font-size: 3rem;
      font-weight: 600;
      text-shadow: 
        3px 3px 2px #083f46,                    
        3px 3px 2px #083f46,                  
        3px 3px 2px #083f46;
  }
    p{
      line-height: 1.5;
      margin-top: 0.5rem;
      text-align: justify;
      font-weight: 500;
      color: #F3F3F3;
      max-width: 550px;
    }
  }
`;

