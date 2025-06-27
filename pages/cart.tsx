import { useState } from 'react';
import { Product } from '../types';

export default function Cart() {
  const [items, setItems] = useState<Product[]>([]);
  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
}
