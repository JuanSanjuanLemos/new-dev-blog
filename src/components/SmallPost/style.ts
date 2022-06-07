import styled, { keyframes } from "styled-components";

const sizeView = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  border: 2px solid #333;
  padding: 1rem;
  border-radius: 10px;
  animation: ${sizeView} 1s linear;
  background-color: #21212c;
  margin: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-7%);
  }
  .wrapper-img {
    position: relative;
    width: 100%;
    padding-bottom: 35%;
  }
  .post-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.8rem;
    h1 {
      margin-top: 1rem;
      font-weight: 600;
      font-size: 1.75rem;
      line-height: 1.2;
      color: #3bcbde;
    }
    h2 {
      font-size: 1.125rem;
      color: #d7d7d7;
      line-height: 1.2;
      span {
        margin-left: 0.5rem;
        cursor: pointer;
        color: #3bcbde;
        font-size: 0.8rem;
      }
    }
    div {
      h3 {
        color: #bbbbbb;
        font-size: 0.875rem;
        line-height: 1.2;
        display: inline;
        vertical-align: middle;
        span {
          font-size: 1.25rem;
          line-height: 1;
          vertical-align: middle;
          margin-right: 0.5rem;
        }
        &:first-child {
          margin-right: 1.5rem;
        }
      }
    }
  }
`;
