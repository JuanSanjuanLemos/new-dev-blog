import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
  min-height: 70vh;
  .content {
    max-width: 1160px;
    margin: 3rem auto !important;
    justify-content: center;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 340px));
  }
`;
