import React, {useState, useRef} from 'react';
import { Button, FoodCard } from "../index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const DishList = ({ dishes, selectedCategory, AddToCart }) => {
    const [noOfCards, setNoOfCards] = useState(9);

    // const cardRefs = useRef([]);
    // useGSAP(() => {
    //     cardRefs.current.forEach((card, index) => {
    //       if (card) {
    //         const tl = gsap.timeline({
    //           scrollTrigger: {
    //             trigger: card,
    //             start: "top 90%", // When the row comes into view
    //             toggleActions: "play none none none",
    //             once: true, // Fire only once
    //           },
    //         });
    
    //         tl.fromTo(
    //           card,
    //           { opacity: 0, y: 50, scale: 0.8 }, // Initial state
    //           { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" } // Animate into view
    //         );
    //       }
    //     });
    //   }, [dishes]);

  return (
    <div className="w-full p-8 md:p-12 lg:p-16 lg:pt-4 flex flex-wrap justify-center gap-16">
    {dishes.slice(0, noOfCards).map((item, index) => (
      <div
        key={item.id}
        // ref={(el) => (cardRefs.current[index] = el)} 
      >
        <FoodCard 
        name={item.title} 
        price={item.price} 
        img={item.image} 
        onAddToCart={() => AddToCart(item)} 
        />
      </div>
    ))}
    <div className="w-full flex justify-center items-center">
      <Button
        className={`${
          noOfCards >= dishes.length ? "hidden" : "block"
        } ${selectedCategory === "All" ? "block" : "hidden"}`}
        onClick={() => setNoOfCards(noOfCards + 3)}
      >
        Load More
      </Button>
    </div>
  </div>
  );
};

export default DishList;
