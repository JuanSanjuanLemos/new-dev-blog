import styled from "styled-components";


export const Article = styled.article`
  border: 2px solid #333;
  padding: 1rem;
  border-radius: 10px;

  background-color:#21212c;
  max-height: 320px;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: translateY(-7%);
  }

  h1{
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.2;
    color: #3bcbde;
  }
  h2{
    font-size: 1.125rem;
    color: #D7D7D7;
    line-height: 1.2;
    span{
      margin-left: 0.5rem;
      cursor: pointer;
      color: #3BCBDE;
      font-size: 0.8rem;
    }
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