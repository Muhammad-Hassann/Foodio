// CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form bg-white p-6 rounded-lg shadow-lg mt-6">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray font-semibold mb-2">
          Address:
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray font-semibold mb-2">
          Payment Method:
        </label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray rounded"
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
        Complete Order
      </button>
    </form>
  );
};

export default CheckoutForm;
