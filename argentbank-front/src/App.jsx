import React from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './compoments/Header';
import Footer from './compoments/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
