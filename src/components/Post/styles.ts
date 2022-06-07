import styled from "styled-components";

export const Container = styled.main`
  margin: auto;
  .content {
    margin: 5rem auto;
    padding: 0 0.5rem 2.5rem;
    border-bottom: 1px solid #747474;
    max-width: 720px;
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
      a{
        color: #3BCBDE;
        text-decoration: underline;
      }
      p,strong,span{
        font-size: 1.125rem;
        color: #bbb;
        line-height: 1.3;
      }
      p{
        margin-bottom: 1rem;
        text-align: justify;
        padding-left: 1rem;
      }
     
      strong{
        color: #3BCBDE;
        text-align: start !important;
      }
      p img{
        text-align: center;
      }
    }
  }

  .wrapper-nav-posts{
    display: flex; justify-content: space-between;
    margin-bottom: 3rem;
    max-width: 720px;
    margin: auto;
  }
`;

export const BoxBanner = styled.div`
  flex: 1;
  margin: auto;
  position: relative;
  padding-bottom: 30%;
  img {
    object-fit: cover;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  margin: 2rem 0;
  img {
    width: 100%;
  }
`;
