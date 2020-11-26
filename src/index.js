import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App';
import GlobalStyles from './style/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>
  ,
  document.getElementById('app'));
