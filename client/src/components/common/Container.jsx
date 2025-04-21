import React from 'react';
import styled from 'styled-components';

function Container({ child }) {
  return (
    <ContainerStyled>
      {child}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div `
    max-width: 1280px;
    margin: 0 auto;
`;

export default Container;