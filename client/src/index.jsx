import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import store from './store';
import App from './App';

const theme = createTheme({
  palette:
   {
     primary: { main: '#0971f1' },
     label: { main: '#FFFFFF', background: '#ff1744' },
     auctionItem: { background: '#F0F0F0' },
   },
});

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
