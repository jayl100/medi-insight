import React from 'react';
import MediLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {

  return (
    <HeaderBorder>
      <HeaderStyled>
        <img src={MediLogo} className="logo" alt="medi logo" />
        <ul className="nav">
          <li>
            <LinkStyled to={'/hospitals'}>Hospitals</LinkStyled>
          </li>
        </ul>
      </HeaderStyled>
    </HeaderBorder>
  );
}

const HeaderBorder = styled.div`
    border-bottom: 1px solid #D9D9D9;
`;

const HeaderStyled = styled.header`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
`;

const LinkStyled = styled(Link)`
    font-weight: 700;
    font-size: 18px;
`;

export default Header;