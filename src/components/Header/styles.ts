import styled from "styled-components";

export const Content = styled.div`
  padding:2rem 0;
  background-color: #000;
  max-width: 1440px;
  cursor: pointer;
  margin: auto;
  .wrapper-logo{
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    width: 15rem;
    height: 3rem;
    img{
      object-fit: contain;
    }
  }
`;