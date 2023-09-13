import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import client from './config/apolloClient.jsx';
import { ApolloProvider } from '@apollo/client';
// import { darkTheme } from './themes.tsx';
import theme from './themes';
import i18n from './i18n/i18n';

import { createContext } from 'react';
import { I18nextProvider } from 'react-i18next';

export const ColorSchemeContext = createContext();

const Main = () => {
  const [colorScheme, setColorScheme] = useState('teal'); // Default color scheme

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
            <I18nextProvider i18n={i18n}>
              <App />
            </I18nextProvider>
          </ColorSchemeContext.Provider>
        </ChakraProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
// ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
