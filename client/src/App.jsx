import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import router from './routes/Route.jsx';
import { RouterProvider } from 'react-router-dom';

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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
