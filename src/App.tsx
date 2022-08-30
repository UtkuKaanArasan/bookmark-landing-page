// React
import React from 'react';
// Styling
import './App.css';
// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Downloads from './components/Downloads/Downloads';

function App() {
  return (
    <div className="App px-8 py-4 md:px-12 md:py-6 lg:px-18 xl:px-24 2xl:px-30">
      <Navbar />
      <Hero />
      <Features />
      <Downloads />
    </div>
  );
}

export default App;
