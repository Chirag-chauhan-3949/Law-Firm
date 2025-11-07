import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import OurPeople from './pages/OurPeople';
import Contact from './pages/Contact';
import StyleGuide from './pages/Style';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/style" element={<StyleGuide/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;