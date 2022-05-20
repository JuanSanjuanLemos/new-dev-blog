import styled, { keyframes } from "styled-components";

const sizeView = keyframes`
  0%{
    opacity: 0.4;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0.4;
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
  position: relative;
  margin: auto;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  img{
    object-fit: cover;
    animation: ${sizeView} infinite 5s linear;
  }
  .text{
    margin: 1rem;
    z-index: 3;
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

