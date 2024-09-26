import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: 29.99, image: 'https://via.placeholder.com/250' },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: 39.99, image: 'https://via.placeholder.com/250' },
  { id: 3, name: 'Product 3', description: 'This is product 3', price: 19.99, image: 'https://via.placeholder.com/250' },
];

function ProductList() {
  return (
    <div style={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

const styles = {
  productList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
};

export default ProductList;
