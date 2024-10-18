import React from "react";
import { Button } from '../components'

function FoodCard({ img, name, price, dish, onAddToCart }) {
  // console.log(dish);
  return (
    <div className="w-[350px] h-[450px] bg-white group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-500">
      <img
        loading="lazy"
        src={img}
        alt={name}
        className="h-[70%] w-full object-cover object-center  "
      />

      <div className="h-[30%] flex justify-between items-center p-4 py-8">
        <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-rubik font-bold">{name}</h2>
        <Button 
        children="Add to Cart" 
        className="w-32"
        onClick={() => onAddToCart(dish)}
        />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">{price}</p>
          <img
            src="../../stars.png"
            alt=""
            className="w-16 h-6 object-cover object-center m-0 p-0"
          />
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
