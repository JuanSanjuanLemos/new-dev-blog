import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 100px;
  right: 10%;

  margin-left: auto;
  background-color: #c1c1c126;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  span {
    cursor: pointer;
    font-size: 2rem;
    height: 2rem;
    width: 2rem;
    color: #dddbdb;
  }
`;
