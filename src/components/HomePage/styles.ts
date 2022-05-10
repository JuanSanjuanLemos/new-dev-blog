import styled from "styled-components";

export const Container = styled.main`
  .content{
    max-width: 1160px;
    margin: auto;

    .load-more{
      color: #3BCBDE;
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover{
        filter: brightness(1.3);
      }
    }
  }
`;