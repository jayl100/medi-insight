import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Container({ child }) {
  return (
    <>
      <Header/>
      <ContainerStyled>
        {child}
      </ContainerStyled>
      <Footer/>
    </>
  );
}

const ContainerStyled = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 6rem;
`;

export default Container;