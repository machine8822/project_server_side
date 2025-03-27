import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route} from "react-router-dom"
import './index.css';
import Layout from './Layout'
import Nopage from './pages/Nopage';

function App() {
  return(
    <BrouwerRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </BrouwerRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
