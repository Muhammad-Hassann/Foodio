import React, { useState } from 'react';
import MenuCategories from './MenuCategories';
import DishList from './DishList';
import ShoppingCart from './ShoppingCart';
import CheckoutForm from './CheckoutForm';
import fooddata from "../../data/fooddata";
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const OrderOnline = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ["All", ...new Set(fooddata.map((item) => item.category))];

  const filterFood =
    selectedCategory === "All"
      ? fooddata
      : fooddata.filter((item) => item.category === selectedCategory);

  const { cartItems, setCartItems } = useCart()   

  const handleAddToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...dish, quantity: 1 }];
      }
    });
  };

  const handleUpdateCart = (dishId, action) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === dishId) {
            return {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const handleCheckout = (formData) => {
    setCartOpen(false)
    navigate('/checkout')
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
    <div className="order-online-page p-8 pt-44 bg-purple">
      
      {/* Apply blur to the main content when cart is open */}
      <div className={`main-content ${cartOpen ? 'blur-sm overflow-y-hidden' : ''}`}>
        {/* Category Section */}
        <MenuCategories 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        {/* Dishes Section */}
        <DishList 
          dishes={filterFood} 
          selectedCategory={selectedCategory} 
          AddToCart={handleAddToCart} 
        />

        {cartItems.length > 0 && 
        <div 
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-2xl cursor-pointer flex justify-between items-center bg-yellow p-6 w-[400px]"
          onClick={() => setCartOpen(true)}
        >
          <p className='px-4 p-2 rounded-full bg-black text-white text-xl'>{cartItems.length}</p>
          <p className='text-xl font-bold '>View Cart</p>
          <p className='text-xl font-bold '>${calculateTotal().toFixed(2)}</p>
        </div>
        }
      </div>

      {cartOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40" 
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      {/* Cart Section */}
      <ShoppingCart
        cartOpen={cartOpen} 
        setCartOpen={setCartOpen}
        cartItems={cartItems} 
        onUpdateCart={handleUpdateCart}  
        onCheckout={handleCheckout} 
      />
    
    </div>
    </>
  );
};

export default OrderOnline;
