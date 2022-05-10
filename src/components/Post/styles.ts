import styled from "styled-components";

export const Container = styled.main`
  max-width: 720px !important;
  margin: auto;
  .content {
    margin: 5rem auto;
    padding: 0 0.5rem 2.5rem;
    border-bottom: 1px solid #747474;
    h1{
      font-size: 3rem;
      font-weight: 600;
    }
    .about-post{
      color: #BBBBBB;
      font-size: 0.875rem;
      line-height: 1.2;
      display: inline-block;
      vertical-align: middle;
      margin: 1.5rem 1.5rem 1rem 0;
      span{
        font-size: 1.25rem;
        line-height: 1;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
    }
    

    &-post{
      h1,h2{
        font-size: 2.25rem;
        font-weight: 600;
        line-height: 1.2;
        margin: 2rem 0;
      }
      p,strong,span{
        font-size: 1.125rem;
        color: #bbb;
        line-height: 1.3;
      }
      p{
        margin-bottom: 1rem;
        text-align: justify;
      }
      strong{
        color: #3BCBDE;
      }
    }
  }

  .wrapper-nav-posts{
    display: flex; justify-content: space-between;
    margin-bottom: 3rem;
  }
`;

export const BoxBanner = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
  padding-bottom: 30%;
  img{
    object-fit: contain;
  }
`;
