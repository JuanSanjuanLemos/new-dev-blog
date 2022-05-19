import styled from "styled-components";

export const Container = styled.section`
  .content{
    max-width: 1160px;
    margin: 3rem auto !important;
    display: grid;
    gap: 3rem;
    grid-template-columns:repeat( auto-fit, minmax(250px, 1fr) );
  }
`;