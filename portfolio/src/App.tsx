import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';



const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App
