import React from 'react';
import { useCart } from '../contexts/use-cart';

export default function Cart() {
  const { addItem, removeItem, groupCartItems, cart } = useCart();
  return (
    <div className="cart">
      {groupCartItems().map((p, i) => {
        return (
          <div class="cart-item" key={i}>
            <img src={p.image_url} alt={p.name} width="100" />
            <div class="content">
              <h3>{p.name}</h3>
              <div class="cart-buttons">
                <button onClick={() => removeItem(p.sku)}>-</button>
                <button>{p.quantity}</button>
                <button onClick={() => addItem(p.sku)}>+</button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="total">${cart.reduce((a, c) => (a += c.price), 0)}</div>
    </div>
  );
}
