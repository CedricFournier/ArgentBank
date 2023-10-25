import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './compoments/Header';
import Home from './pages/Home';
import Footer from './compoments/Footer';
import Signin from './pages/Signin';
import User from './pages/User';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
