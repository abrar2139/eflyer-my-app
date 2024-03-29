import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer }  from './footer/footer.jsx';
import './App.css'
import './responsive.css'
import { Header } from './header/header.jsx';
import Spinner from './spinner/spinner.jsx';
import Products from './products/products.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header/>
   <Products/>
   <Spinner/>
   <Footer/>
  </React.StrictMode>
);


