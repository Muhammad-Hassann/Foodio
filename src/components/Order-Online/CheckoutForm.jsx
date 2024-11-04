import React, { useState } from 'react';
import { Button } from '../index'
import { FaCcMastercard } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";

const CheckoutForm = ({ onSubmit, cartItems, setCheckout, setCartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'cash-on-delivery',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlePlaceOrder = () => {
   if(formData.name !== "" || formData.address !== "" || formData.phone !== ""){
     alert("Your Order is placed!")
     setCartItems([])
     setCheckout(false)

   }
  }

  // Calculate totals
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const tax = calculateTotal() * 0.15;
  const deliveryFee = 12;
  const grandTotal = calculateTotal() + tax + deliveryFee;
  console.log(cartItems)

  return (
    <>
    <form onSubmit={handleSubmit} className="w-full checkout-form bg-purple flex flex-col md:flex-row gap-8 md:p-36 p-4 pt-44">
      {/* Left Column - User Info & Payment Method */}
      <div className='w-full md:w-[60%] bg-yellow p-8 rounded-xl shadow-xl'>
        <h2 className="text-3xl font-rubik font-bold mb-6">Checkout Information</h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold my-2">Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 outline-none focus:border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold my-2">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 outline-none focus:border rounded"
            required
          />
        </div>

        <div className="w-full mb-4 flex gap-4">
          <div className='w-1/2'>
          <label className="block text-lg font-semibold my-2">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 outline-none focus:border rounded"
            required
          />
          </div>
          <div className='w-1/2'>
          <label className="block text-lg font-semibold my-2">Alternate Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 outline-none focus:border rounded"
          />
          </div>
        </div>

        <div className="mb-6 ">
  <label className="block text-lg font-semibold my-2">Payment Method:</label>
  <div className="flex gap-6 flex-col md:flex-row">
    {/* Cash on Delivery Card */}
    <label
      className={`flex items-center w-44 gap-4 p-4 rounded-lg cursor-pointer ${
        formData.paymentMethod === 'cash-on-delivery' ? 'border-2 border-purple' : 'border border-[#8F8F8F]'
      }`}
    >
      <input
        type="radio"
        name="paymentMethod"
        value="cash-on-delivery"
        checked={formData.paymentMethod === 'cash-on-delivery'}
        onChange={handleInputChange}
        className="hidden"
      />
      <div className="w-44 flex flex-col items-center  gap-2">
        <BsCashStack className="text-6xl text-green-800" />
        <span className="text-lg font-semibold">Cash on Delivery</span>
        </div>
    </label>

    {/* Online Payment Card */}
    <label
      className={`flex items-center w-44 gap-4 p-4 rounded-lg  cursor-pointer ${
        formData.paymentMethod === 'online-payment' ? 'border-2 border-purple' : 'border border-[#8F8F8F]'
      }`}
    >
      <input
        type="radio"
        name="paymentMethod"
        value="online-payment"
        checked={formData.paymentMethod === 'online-payment'}
        onChange={handleInputChange}
        className="hidden" 
      />
      <div className="w-44 flex flex-col items-center gap-2">
        <FaCcMastercard className="text-6xl text-blue" />
        <span className="text-lg font-semibold">Online Payment</span>
        {/* <div className="flex gap-2 ml-2">
          <img src="/path/to/visa-icon.png" alt="Visa" className="w-6 h-6" />
          <img src="/path/to/mastercard-icon.png" alt="MasterCard" className="w-6 h-6" />
        </div> */}
      </div>
    </label>
  </div>
</div>

      </div>

      {/* Right Column - Order Summary */}
      <div className='w-full md:w-[40%]'>

        {/* Cart Items List */}
        <div className=" p-8 rounded-lg  bg-yellow  shadow mb-6">
            {cartItems.map((item) => (
          <ul className="space-y-4">
              <li key={item.id} className="flex justify-between items-center mt-2">
                <span className='text-lg font-semibold'>{item.quantity} x {item.title} </span>
                <span className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
                <div className="border-[1px] border-[#272727] w-full"></div>
          </ul>
            ))}

        </div>

        {/* Bill Summary */}
        <div className="bg-yellow p-8 rounded-lg shadow mb-6 md:sticky md:top-10">
          <h3 className="text-2xl font-bold font-rubik mb-4">Your Order</h3>
          <div className="flex justify-between mb-2 font-semibold text-lg">
            <span>Subtotal:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 font-semibold text-lg">
            <span>Tax (15%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 font-semibold text-lg">
            <span>Delivery Fee:</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold text-xl mt-4">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        <Button 
        className='w-full mt-4' 
        children="Place Order" 
        bgColor='bg-purple' 
        textColor='text-white'
        onClick={handlePlaceOrder}
        />
        </div>
        <div className='flex' onClick={() => setCheckout(false)}>
        <FaArrowLeftLong className='text-white text-2xl cursor-pointer mt-1 mr-1' /> 
        <p className='text-white cursor-pointer text-xl font-semibold underline' >Continue to add more items </p>
        </div>

      </div>
    </form>
        </>
  );
};

export default CheckoutForm;
