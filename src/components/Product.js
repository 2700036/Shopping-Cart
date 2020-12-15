import React from 'react'
import { useCart } from '../contexts/use-cart';

export default function Product({product}) {
  const { addItem, removeItem, cart } = useCart();
  const q = cart.filter( p => p?.sku === product.sku).length;
  return (
    <div className='product'>
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <div className='product-buttons'>
        {q > 0 
        ? <button className='remove' onClick={()=>removeItem(product.sku)}>Remove</button>
        : <div/>
      }
        <button className='add' onClick={()=>addItem(product.sku)}>{`Add to Cart (${q})`}</button>
      </div>
    </div>
  )
}
