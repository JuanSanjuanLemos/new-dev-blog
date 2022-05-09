import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 3rem 0;
  h1{
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.2;
    cursor: pointer;
    transition: color 0.2s linear;
    &:hover{
      color: #3BCBDE;
    }
  }
  h2{
    font-size: 1.125rem;
    color: #D7D7D7;
    line-height: 1.2;
  }
  div{
    h3{
      color: #BBBBBB;
      font-size: 0.875rem;
      line-height: 1.2;
      display: inline;
      vertical-align: middle;
      span{
        font-size: 1.25rem;
        line-height: 1;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
      &:first-child{
        margin-right: 1.5rem;
      }
    }
  }
`;