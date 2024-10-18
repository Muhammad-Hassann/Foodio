import React from 'react';
import { RxCross2 } from "react-icons/rx";

const ShoppingCart = ({ cartItems = [], onUpdateCart, onCheckout }) => {
  // console.log(cartItems)
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    
<div className='w-1/3 bg-yellow rounded-l-lg absolute top-0 right-0 p-20 pt-44'>
<div className='flex justify-between'>
    <h2 className='text-3xl font-semibold mb-4'>Your Cart</h2>
    <button className='text-3xl font-bold'><RxCross2 /></button>
    </div>
    <ul>
        {cartItems.map(item => (
            <li key={item.id} className='flex justify-between items-center mb-2'>
                <span>{item.name} x {item.quantity}</span>
                <div>
                    <button onClick={() => onUpdateCart(item.id, 'decrease')} className='bg-gray px-2 py-1 rounded'>-</button>
                    <button onClick={() => onUpdateCart(item.id, 'increase')} className='bg-gray px-2 py-1 rounded'>+</button>
                </div>
            </li>
        ))}
    </ul>
    <div className='mt-4 font-semibold'>
        Total: ${calculateTotal().toFixed(2)}
    </div>
    <button onClick={onCheckout} className='bg-green-500 text-white px-4 py-2 rounded mt-4'>Checkout</button>

</div>
  );
};

export default ShoppingCart;
