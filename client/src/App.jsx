import {useState} from 'react';
import mediLogo from './assets/logo.svg';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";

const theme = {
  colors: {
    primary: '#000',
    secondary: '#00CDCD'
  },
  fontSize: '16px'
};
const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize};
  color: ${({ theme }) => theme.colors.primary};
`;

function App() {
    
    return (
  
        <ThemeProvider theme={theme}>
          <div className = 'App' > 
            <header className='App-header'>
              <a href="#">
                  <img src={mediLogo} className="logo" alt="medi logo"/>
              </a>
              <ul className='nav'>
                  <li>
                      <a href="">Hospitals</a>
                  </li>
                  <li>
                      <a href="">Bookmark</a>
                  </li>
                  <li>
                      <a href="">Logout</a>
                  </li>
              </ul>
            </header>
            <Home/>
          </div>
        </ThemeProvider>        
     
    )
}

export default App;
