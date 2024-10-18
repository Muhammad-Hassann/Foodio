import React, {useRef} from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MenuCategories = ({ categories, onSelectCategory, selectedCategory }) => {
//     const categoryRefs = useRef([]);
//     useGSAP(() => {
//         categoryRefs.current.forEach((category, index) => {
//     if (category) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: category,
//           start: "top 95%", // Trigger when the category button comes into view
//           toggleActions: "play none none none",
//           once: true,
//         },
//       });

//       tl.fromTo(
//         category,
//         { opacity: 0, y: 30 }, // Initial state
//         { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" } // Animate into view
//       );
//     }
//   });
// }, []);
  return (
    <div  className="w-full p-4 md:p-6 lg:p-8 flex justify-center items-center flex-wrap gap-4">
    {categories.map((category, index) => (
      <button
        key={index}
        // ref={(el) => (categoryRefs.current[index] = el)}
        className={`px-4 py-2 rounded-full text-white ${
          selectedCategory === category && "bg-yellow text-purple"
        }`}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>

  );
};

export default MenuCategories;
