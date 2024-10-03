import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Decor 1', description: 'This is decor 1', price: 29.99, image: 'https://via.placeholder.com/250', type: 'decor' },
  { id: 2, name: 'Hall 1', description: 'This is hall 1', price: 39.99, image: 'https://via.placeholder.com/250', type: 'hall' },
  { id: 3, name: 'Catering 1', description: 'This is catering 1', price: 19.99, image: 'https://via.placeholder.com/250', type: 'catering' },
];

function ProductList() {
  return (
    <div style={styles.productList}>
      {products.map(product => (
        <Link key={product.id} to={`/${product.type}/${product.id}`} style={styles.link}>
          <ProductCard product={product} />
        </Link>
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
  link: {
    textDecoration: 'none', // Remove underline from links
    color: 'inherit', // Inherit color from parent
  },
};

export default ProductList;
