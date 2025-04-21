import React from 'react';
import mediFooterLogo from '../..//assets/footer-logo.svg';
import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <footer>
            <div className="inner">
              <a className="footer-logo" href="#">
                <img src={mediFooterLogo} className="logo" alt="medi logo" />
              </a>
              <div className="copy">
                <Copy>© 2025 MediInsight. All Rights Reserved.</Copy>
                <a href="https://github.com/jayl100/medi-insight" target="_blank">GitHub</a>
              </div>
            </div>

          </footer>
    </div>
  );
}

const Copy = styled.p`
    font-weight: 400;
`;

export default Footer;