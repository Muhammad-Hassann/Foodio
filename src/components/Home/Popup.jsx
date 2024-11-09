import React from 'react';
import { gsap } from 'gsap';

const Popup = ({ data, onClose }) => {
  const popupRef = React.useRef();

  React.useEffect(() => {
    gsap.fromTo(popupRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center rounded-3xl bg-black bg-opacity-50">
      <div ref={popupRef} className="bg-purple p-8 rounded-lg shadow-lg w-[90%] max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-white font-rubik">Reservation Confirmed!</h2>
        <div>
        <p className='text-white leading-8'><strong>Name:</strong> {data.name}</p>
        <p className='text-white leading-8'><strong>Phone:</strong> {data.phone}</p>
        <p className='text-white leading-8'><strong>Guests:</strong> {data.guests}</p>
        <p className='text-white leading-8'><strong>Date:</strong> {data.date}</p>
        <p className='text-white leading-8'><strong>Time:</strong> {data.time}</p>
        </div>
        <button 
          onClick={onClose} 
          className="mt-4 px-6 py-2 bg-yellow text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
