import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Slider from './components/Slider';  
import HallDetail from './components/HallDetail'; // Ensure you have this file
import CateringDetail from './components/CateringDetail'; // Ensure you have this file

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <Slider />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/hall/:id" element={<HallDetail />} />
            <Route path="/catering/:id" element={<CateringDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
