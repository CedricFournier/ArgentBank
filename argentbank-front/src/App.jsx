import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './compoments/Header';
import Home from './pages/Home';
import Footer from './compoments/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
