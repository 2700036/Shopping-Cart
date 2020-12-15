import React, { useState, useRef } from 'react';
import CartIcon from '../supermarket.svg';
import useOnClickOutside from 'use-onclickoutside';
import { useCart } from '../contexts/use-cart';

export default function Header() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState();
  const ref = useRef(null);
  useOnClickOutside(ref, ()=>setIsOpen(false));
  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={()=>setIsOpen(isOpen=>!isOpen)}>
            <img src={CartIcon} width="30" />({cart.length})
          </button>
          <div ref={ref} 
          className="cart-modal" 
          style={{display: isOpen ? 'block' : 'none'}}>

          </div> 
        </div>
      </div>
    </header>
  );
}
