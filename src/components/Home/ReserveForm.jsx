// components/ReserveForm.jsx
import React, { useState } from 'react';
import { Button } from '../index';
import Popup from './Popup';

function ReserveForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Date validation
    const selectedDate = new Date(formData.date);
    const today = new Date();
    if (selectedDate < today) {
      setError('Please select a future date.');
      return;
    }

    setError(''); // Clear error if validation passes
    setShowPopup(true); // Show popup with user data
  };

    const closePopup = () => {
    setShowPopup(false);
    setFormData({
      name: '',
      phone: '',
      guests: '',
      date: '',
      time: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex lg:flex-row flex-wrap gap-4'>
      <input 
        type="text" 
        name="name" 
        placeholder="Full Name" 
        value={formData.name}
        onChange={handleChange}
        className="lg:w-[45%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg"
        required
      />
      <input 
        type="text" 
        name="phone" 
        placeholder="Phone" 
        value={formData.phone}
        onChange={handleChange}
        className="lg:w-[45%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg"
        required
      />
      <input 
        type="number" 
        name="guests" 
        placeholder="No. of Guests" 
        value={formData.guests}
        onChange={handleChange}
        className="lg:w-[30%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg"
        required
      />
      <input 
        type="date" 
        name="date" 
        placeholder="Date" 
        value={formData.date}
        onChange={handleChange}
        className="lg:w-[30%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg"
        required
      />
      <input 
        type="time" 
        name="time" 
        placeholder="Time" 
        value={formData.time}
        onChange={handleChange}
        className="lg:w-[30%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg"
        required
      />
      <Button>Reserve</Button>

      {error && <p className="text-red-500 w-full">{error}</p>}

      {/* Display popup with form data */}
      {showPopup && (
        <Popup 
          data={formData} 
          onClose={(closePopup)} 
        />
      )}
    </form>
  );
}

export default ReserveForm;
