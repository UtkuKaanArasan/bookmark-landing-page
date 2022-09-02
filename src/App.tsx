// React
import React from 'react';
// Styling
import './App.css';
// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Downloads from './components/Downloads/Downloads';
import Faq from './components/Faq/Faq';
import Join from './components/Join/Join';

function App() {
  return (
    <div className="App py-4 md:py-6">
      <Navbar />
      <Hero />
      <Features />
      <Downloads />
      <Faq />
      <Join />
    </div>
  );
}

export default App;
