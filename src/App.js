import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Product from './Components/Product';
import Cooperate from './Components/Cooperate';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
     <Product />
     <Cooperate />
  
    </div>
  );
}

export default App;
