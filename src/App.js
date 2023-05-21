import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import './Style.css';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
