import React from 'react'
import { CheckoutForm } from '../components'
import { useCart } from '../context/CartContext'

function Checkout() {
  const handleCheckout = (formData) => {
    // setCartItems([]); 
    setCartOpen(false)
    navigate('/checkout')
  };
  const { cartItems, setCartItems } = useCart();
  return (
    <>
     <CheckoutForm onSubmit={handleCheckout} cartItems={cartItems}  setCartItems={setCartItems}/> 
    </>
  )
}

export default Checkout
