import React from 'react';
import DynamicComponent from './DynamicComponent';
import InfoCard from './InfoCard';
import {Banner} from '../../index';
import menuData from '../../../data/menuData';
import { FaPizzaSlice, FaHamburger, FaDrumstickBite, FaIceCream, FaCoffee } from 'react-icons/fa';

function App() {
  const components = [
    {
      icon: FaPizzaSlice,
      title: 'Pizza',
      component: InfoCard,
      imageSrc: menuData.pizza.imageSrc,
      mainTitle: menuData.pizza.mainTitle,
      items: menuData.pizza.items,
    },
    {
      icon: FaHamburger,
      title: 'Burger',
      component: InfoCard,
      imageSrc: menuData.burger.imageSrc,
      mainTitle: menuData.burger.mainTitle,
      items: menuData.burger.items,
    },
    {
      icon: FaDrumstickBite,
      title: 'Steak',
      component: InfoCard,
      imageSrc: menuData.bbq.imageSrc,
      mainTitle: menuData.bbq.mainTitle,
      items: menuData.bbq.items,
    },
    {
      icon: FaIceCream,
      title: 'Ice Cream',
      component: InfoCard,
      imageSrc: menuData.dessert.imageSrc,
      mainTitle: menuData.dessert.mainTitle,
      items: menuData.dessert.items,
    },
    {
      icon: FaCoffee,
      title: 'Coffee',
      component: InfoCard,
      imageSrc: menuData.coffee.imageSrc,
      mainTitle: menuData.coffee.mainTitle,
      items: menuData.coffee.items,
    },
  ]

  return (
    <div className="z-[11] lg:p-8 pt-14 bg-purple">
      <h1 className="text-6xl font-rubik font-bold text-center text-white my-8">
        Discover Our Menu
      </h1>
      <DynamicComponent components={components} />
      <Banner />
    </div>
  );
}

export default App;
