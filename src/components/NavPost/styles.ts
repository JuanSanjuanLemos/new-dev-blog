import styled from "styled-components";

export const Box = styled.div`
  h2{
    font-size: 1.25rem;
  }
  h3{
    font-size: 1rem;
    color: #3BCBDE;
    margin-top: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover{
      filter: brightness(1.3);
    }
  }
  &.-next{
    text-align: right;
  }
`;