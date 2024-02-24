import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import {StoreProvider} from './context-and-reducer/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </StoreProvider>
);
