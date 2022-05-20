import styled from "styled-components";

export const Container = styled.section`
margin-top: 3rem;
  min-height: 100vh;
  .content {
    max-width: 1160px;
    margin: 3rem auto !important;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
