// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='p-2'>
        <Presentation/>
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
