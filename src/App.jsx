import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './components/resume';


const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App
