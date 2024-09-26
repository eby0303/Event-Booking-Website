import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 E-Commerce. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
