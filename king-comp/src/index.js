import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Nopage from './pages/Nopage';
import Home from './pages/Home';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Plants from './pages/Plants';
import Checkout from './pages/Checkout';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="plants" element={<Plants />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
