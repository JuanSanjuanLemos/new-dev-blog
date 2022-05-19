import styled from "styled-components";

export const Content = styled.div`
  padding:2rem 0;
  background-color: #040810;
  border-bottom: 1px solid #747474;
  cursor: pointer;
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