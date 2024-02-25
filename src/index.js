import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";
import {StoreProvider} from './context-and-reducer/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <HashRouter>
        <App/>
    </HashRouter>
  </StoreProvider>
);
