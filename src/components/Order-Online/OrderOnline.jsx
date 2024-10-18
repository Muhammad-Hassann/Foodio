// OrderOnline.js
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';    
import { useGSAP } from '@gsap/react';
import MenuCategories from './MenuCategories';
import DishList from './DishList';
import ShoppingCart from './ShoppingCart';
import CheckoutForm from './CheckoutForm';
import fooddata from "../../data/fooddata";

const OrderOnline = () => {

    // const headingRef = useRef(null);
    // const paraRef = useRef(null);
  
    //     useGSAP(() => {
      
    //       gsap.fromTo(
    //         headingRef.current,
    //         { opacity: 0, x: -100 },
    //         {
    //           opacity: 1,
    //           x: 0,
    //           duration: 1.5,
    //           scrollTrigger: {
    //             trigger:headingRef.current,
    //             start: 'top 40%',
    //             end: 'bottom 20%',
    //           },
    //         }
    //       );
    //     }, []);
  
    //     useGSAP(() => {
      
    //       gsap.fromTo(
    //         paraRef.current,
    //         { opacity: 0, x: 100 },
    //         {
    //           opacity: 1,
    //           x: 0,
    //           duration: 1.5,
    //           scrollTrigger: {
    //             trigger: paraRef.current,
    //             start: 'top 40%',
    //             end: 'bottom 20%',
    //           },
    //         }
    //       );
    //     }, []);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const categories = ["All", ...new Set(fooddata.map((item) => item.category))];

  const filterFood =
    selectedCategory === "All"
      ? fooddata
      : fooddata.filter((item) => item.category === selectedCategory);

// Function to handle adding items to the cart
const handleAddToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === dish.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...dish, quantity: 1 }];
      }
    });
  };
  
  // Function to handle updating item quantity in the cart
  const handleUpdateCart = (dishId, action) => {
    setCartItems((prevItems) =>
      prevItems
        .map(item => {
          if (item.id === dishId) {
            return {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
            };
          }
          return item;
        })
        .filter(item => item.quantity > 0) // Remove items with quantity <= 0
    );
  };
    
  

  const handleCheckout = (formData) => {
    // Mock submission of the form data
    console.log('Order submitted:', formData, cartItems);
    setCartItems([]);
    setCheckout(false);
  };

  return (
    <div className="order-online-page p-8 pt-44 bg-purple">
      <div className="w-full p-8 md:p-12 lg:p-16 xl:px-56 flex flex-col md:flex-row justify-between items-center">

      <div  className="max-w-[450px] md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold font-rubik text-white">
          Enjoy Our Best Meals Now
          </h1>
        </div>
        
        <div className="max-w-[400px] md:w-1/2 mt-4 md:mt-0 text-white text-justify">
          <p className="text-lg">
          Explore our diverse online menu and easily order your favorite dishes with just a few clicks. From juicy burgers to sizzling steaks, customize your meal and enjoy seamless checkout—our chefs are ready to prepare something special for everyone!
          </p>
        </div>
        </div>

      {/* Menu Categories and Dishes Section */}

      {/* Category Section */}
      <MenuCategories categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

      {/* Dishes Section */}
      <DishList 
      dishes={filterFood} 
      selectedCategory={selectedCategory} 
      onAddToCart={handleAddToCart} 
      />

      {/* Cart Section */}
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart}  onCheckout={handleCheckout} />


      {/* Checkout Form */}
      {checkout && (
        <CheckoutForm onSubmit={handleCheckout} />
      )}
    </div>
  );
};

export default OrderOnline;
