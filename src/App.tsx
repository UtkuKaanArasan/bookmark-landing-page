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
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Downloads />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
