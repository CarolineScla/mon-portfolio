import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <React.StrictMode>
        <Router>
          <Routes path="/" exact component={Home} />
          <Routes path="/about" component={About} />
          <Routes path="/projects" component={Projects} />
          <Routes path="/contact" component={Contact} />
        </Router>
    </React.StrictMode>  
    );
}

export default App;
