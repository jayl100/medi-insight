import {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import mediLogo from './assets/logo.svg';
import mediFooterLogo from './assets/footer-logo.svg';

import Home from './pages/Home';
import HospitalsFilter from './pages/Hospitals-Filter';
import Hospitals from './pages/Hospitals';

import {ThemeProvider} from 'styled-components';
import styled from "styled-components";


const theme = {
    colors: {
        primary: '#000',
        secondary: '#00CDCD'
    },
    fontSize: '16px'
};
const Text = styled.p `
  font-size: ${ ({theme}) => theme.fontSize};
  color: ${ ({theme}) => theme.colors.primary};
`;
      
const Copy = styled.p `
  font-weight:400;
`;
function App() {
  const [showFilter, setShowFilter] = useState(false);
    return (

        <ThemeProvider theme={theme}>
           <div>   
 
    </div>
            <div className='App'>
                <header className='App-header'>
                    <div className='inner'>
                        <Link className='logo' to="/">
                            <img src={mediLogo} className="logo" alt="medi logo"/>
                        </Link>
                        <ul className='nav'>
                            <li>
                                {/* <a href="">Hospitals</a> */}
                                <Link to="/filter">Hospitals</Link>
                            </li>
                            <li>
                                <Link to="/hospitals">Bookmark</Link>
                                {/* <a href="">Bookmark</a> */}
                            </li>
                            <li>
                                <a href="">Logout</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/filter" element={<HospitalsFilter />} />
                  <Route path="/hospitals" element={<Hospitals />} />
                </Routes>
                <footer>
                    <div className='inner'>
                        <a className='footer-logo' href="#">
                            <img src={mediFooterLogo} className="logo" alt="medi logo"/>
                        </a>
                        <div className='copy'>
                            <Copy>© 2025 MediInsight. All Rights Reserved.</Copy>
                            <a href="https://github.com/jayl100/medi-insight" target='_blank'>GitHub</a>
                        </div>
                    </div>

                </footer>
            </div>
        </ThemeProvider>

    )
}

export default App;
