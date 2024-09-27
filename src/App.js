import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './components/styles.css'; // Ensure CSS is imported

const App = () => {
    return (
      <Router>
      <div className="app-container">
          <Sidebar />
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <header className="header">
                  <h1>Addy's Portfolio</h1>
              </header>
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </div>
          </div>
      </div>
  </Router>
    );
};

export default App;
