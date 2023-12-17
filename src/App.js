import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/about-us';
import Contactus from './pages/contact-us';
import Product from './pages/product';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:type/:id' element={<Product/>}/>
        <Route path='/about-us' element={<Aboutus/>} />
        <Route path='/contact-us' element={<Contactus/>} />
      </Routes>
    </Router>
  );
}

export default App;
