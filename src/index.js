import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "./pages/Basket";
import {StoreProvider} from './context-and-reducer/StoreContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      </Router>
    </StoreProvider>

);
