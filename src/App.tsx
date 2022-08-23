// React
import React from 'react';
// Styling
import './App.css';
// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App px-6 py-3 md:px-12 md:py-6 lg:px-18 xl:px-24 2xl:px-30">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
