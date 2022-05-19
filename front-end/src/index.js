import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './assets/css/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

 