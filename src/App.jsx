// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5 pt-5">
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
