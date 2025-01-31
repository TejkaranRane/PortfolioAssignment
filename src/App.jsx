import React from 'react';

import "./App.css";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
