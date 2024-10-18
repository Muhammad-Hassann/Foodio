

const menuData = {
  pizza: {
    mainTitle: "Our Best Pizzas",
    imageSrc: "../../MenuImages/pizza.webp",
    items: [
      {
        title: "Margherita",
        text: "Classic pizza with tomatoes and cheese.",
        price: 10,
      },
      {
        title: "Pepperoni",
        text: "Loaded with pepperoni and cheese.",
        price: 12,
      },
      {
        title: "Veggie Delight",
        text: "Topped with fresh veggies.",
        price: 11,
      },
      {
        title: "BBQ Chicken",
        text: "Barbecue sauce and grilled chicken.",
        price: 13,
      },
    ],
  },
  burger: {
    mainTitle: "Our Best Burgers",
    imageSrc: "../../MenuImages/burger.webp",
    items: [
      {
        title: "Classic Burger",
        text: "Beef patty with lettuce and tomato.",
        price: 8,
      },
      {
        title: "Cheeseburger",
        text: "Beef patty with cheese and lettuce.",
        price: 9,
      },
      {
        title: "Chicken Burger",
        text: "Grilled chicken patty with lettuce and tomato.",
        price: 10,
      },
      { title: "Veggie Burger", text: "Topped with fresh veggies.", price: 9 },
    ],
  },
  bbq: {
    imageSrc: "../../MenuImages/bbq.jpg",
    mainTitle: "BBQ Specialties",
    items: [
      {
        title: "Grilled Chicken",
        text: "Perfectly grilled with BBQ sauce.",
        price: 14,
      },
      {
        title: "BBQ Ribs",
        text: "Tender ribs with smoky BBQ sauce.",
        price: 18,
      },
      {
        title: "Pulled Pork",
        text: "Slow-cooked pulled pork in BBQ sauce.",
        price: 12,
      },
      { title: "Brisket", text: "Smoked brisket served with slaw.", price: 16 },
    ],
  },
  dessert: {
  imageSrc: '../../MenuImages/dessert.jpg',
  mainTitle: 'Dessert',
  items: [
    { title: 'Chocolate Cake', text: 'Rich chocolate cake with fudge.', price: 6 },
    { title: 'Ice Cream Sundae', text: 'Vanilla ice cream with toppings.', price: 5 },
    { title: 'Cheesecake', text: 'Creamy cheesecake with a graham crust.', price: 7 },
    { title: 'Brownie', text: 'Warm brownie served with ice cream.', price: 6 },
  ],
},
coffee:{
    imageSrc: '../../MenuImages/coffee.webp',
  mainTitle: 'Specialty Coffee',
  items: [
    { title: 'Espresso', text: 'Strong and bold espresso shot.', price: 3 },
    { title: 'Latte', text: 'Smooth latte with steamed milk.', price: 4 },
    { title: 'Cappuccino', text: 'Rich cappuccino with frothy milk.', price: 4 },
    { title: 'Mocha', text: 'Espresso mixed with chocolate.', price: 5 },
  ],
},

};

export default menuData;

// {
//   icon: FaHamburger,
//   title: 'Burger',
//   component: InfoCard,
//   imageSrc: '../../MenuImages/burger.webp',
//   mainTitle: 'Our Delicious Burgers',
//   items: [
//     { title: 'Cheeseburger', text: 'Juicy beef patty with cheese.', price: 8 },
//     { title: 'Bacon Burger', text: 'Crispy bacon with melted cheese.', price: 9 },
//     { title: 'Veggie Burger', text: 'Grilled veggie patty with lettuce.', price: 7 },
//     { title: 'Double Cheeseburger', text: 'Two beef patties with double cheese.', price: 10 },
//   ],
// },
// {
//   icon: FaDrumstickBite,
//   title: 'BBQ',
//   component: InfoCard,
//   imageSrc: '../../MenuImages/bbq.jpg',
//   mainTitle: 'BBQ Specialties',
//   items: [
//     { title: 'Grilled Chicken', text: 'Perfectly grilled with BBQ sauce.', price: 14 },
//     { title: 'BBQ Ribs', text: 'Tender ribs with smoky BBQ sauce.', price: 18 },
//     { title: 'Pulled Pork', text: 'Slow-cooked pulled pork in BBQ sauce.', price: 12 },
//     { title: 'Brisket', text: 'Smoked brisket served with slaw.', price: 16 },
//   ],
// },
// {
//   icon: FaIceCream,
//   title: 'Desserts',
//   component: InfoCard,
//   imageSrc: '../../MenuImages/dessert.jpg',
//   mainTitle: 'Sweet Treats',
//   items: [
//     { title: 'Chocolate Cake', text: 'Rich chocolate cake with fudge.', price: 6 },
//     { title: 'Ice Cream Sundae', text: 'Vanilla ice cream with toppings.', price: 5 },
//     { title: 'Cheesecake', text: 'Creamy cheesecake with a graham crust.', price: 7 },
//     { title: 'Brownie', text: 'Warm brownie served with ice cream.', price: 6 },
//   ],
// },
// {
//   icon: FaCoffee,
//   title: 'Coffee',
//   component: InfoCard,
//   imageSrc: '../../MenuImages/coffee.webp',
//   mainTitle: 'Specialty Coffee',
//   items: [
//     { title: 'Espresso', text: 'Strong and bold espresso shot.', price: 3 },
//     { title: 'Latte', text: 'Smooth latte with steamed milk.', price: 4 },
//     { title: 'Cappuccino', text: 'Rich cappuccino with frothy milk.', price: 4 },
//     { title: 'Mocha', text: 'Espresso mixed with chocolate.', price: 5 },
//   ],
// },
