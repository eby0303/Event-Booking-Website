import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    width: '250px',
    margin: '20px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
};

export default ProductCard;
