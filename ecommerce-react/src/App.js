import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Slider from './components/Slider';  // Import Slider

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Searching for:', term);
  };

  return (
    <div style={styles.app}>
      <Navbar onSearch={handleSearch} />
      <Slider />   {/* Add the Slider below Navbar */}
      <div style={styles.content}>
        <ProductList />
      </div>
      <Footer />
    </div>
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
