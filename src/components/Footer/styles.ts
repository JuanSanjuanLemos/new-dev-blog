import styled from "styled-components";

export const Container = styled.footer`
  border-top: 1px solid #747474;
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  .content {
    padding: 2rem;
    max-width: 1160px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    a {
      color: #3bcbde;
    }
  }
`;
