import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { Button } from '../index';

const ShoppingCart = ({ cartItems = [], onUpdateCart, onCheckout, cartOpen, setCartOpen }) => {
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const tax = calculateTotal() * 0.15;
  const deliveryFee = 12;
  const totalWithTax = calculateTotal() + tax + deliveryFee;

  const containerRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {  x: 100 },
      {
        x: 0,
        duration: .5,
      }
    );
  }, [cartOpen]);

  useEffect(() => {
    if(cartItems.length === 0) {
      setCartOpen(false)
    }
  }, [cartItems]
  )


  return (
    <>
      {cartOpen && (
        <div ref={containerRef} className="z-[1000] w-full sm:w-1/2 lg:w-1/4 bg-yellow rounded-l-lg absolute top-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Your Cart</h2>
            <button className="text-2xl sm:text-3xl font-bold" onClick={() => setCartOpen(false)}>
              <RxCross2 />
            </button>
          </div>
          
          <ul>
            {cartItems.map(item => (
              <div key={item.id} className="mb-4 sm:mb-6">
                <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-4">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-2xl" />
                    <div className="flex flex-col">
                      <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
                      <p className="text-lg sm:text-xl font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 px-3 py-2 rounded-full border-2 border-purple mt-2 sm:mt-0">
                    <button onClick={() => onUpdateCart(item.id, 'decrease')} className="px-2 w-8 rounded-full bg-black text-white font-extrabold text-xl">-</button>
                    <p className="text-lg sm:text-2xl font-semibold">{item.quantity}</p>
                    <button onClick={() => onUpdateCart(item.id, 'increase')} className="px-2 w-8 rounded-full bg-black text-white font-extrabold text-xl">+</button>
                  </div>
                </li>
                <div className="border-[1px] border-[#272727] w-full"></div>
                <div className="pt-4 sm:pt-6">
                  <p className="font-semibold text-purple cursor-pointer text-lg sm:text-xl" onClick={() => setCartOpen(false)}>+ Add more items</p>
                </div>
              </div>
            ))}
          </ul>

          {/* Total, Tax, and Delivery Calculation */}
          <div className="mt-4 sm:mt-6 p-4">
            <div className="flex justify-between items-center pb-2 mb-2">
              <p className="text-base sm:text-lg font-medium">Total:</p>
              <span className="text-lg sm:text-xl font-semibold">${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 mb-2">
              <p className="text-base sm:text-lg font-medium">Tax (15%):</p>
              <span className="text-lg sm:text-xl font-semibold">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 mb-2">
              <p className="text-base sm:text-lg font-medium">Delivery:</p>
              <span className="text-lg sm:text-xl font-semibold">${deliveryFee}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <p className="text-base sm:text-lg font-semibold">Grand Total:</p>
              <span className="text-lg sm:text-2xl font-bold">${totalWithTax.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="w-full flex justify-center mt-4">
            <Button onClick={onCheckout} bgColor="bg-purple" textColor="text-white">Checkout</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
