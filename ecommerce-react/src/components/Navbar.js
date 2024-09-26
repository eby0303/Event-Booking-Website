import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>E-Commerce</h1>
      <div style={styles.search}>
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>Search</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
  },
  search: {
    display: 'flex',
  },
  searchInput: {
    padding: '5px',
    marginRight: '10px',
  },
  searchButton: {
    padding: '6px 12px',
    backgroundColor: '#61dafb',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Navbar;
