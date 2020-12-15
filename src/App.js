import React from 'react';
import Header from './components/Header';
import products from './products';
import './App.css';
import Product from './components/Product';

export default function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      <main>
        <div className="products-list">
          {products.map((product, i) =>
          <Product 
          key={i}
          product={product}
          />
          )}
          </div>
      </main>
    </div>
  );
}
