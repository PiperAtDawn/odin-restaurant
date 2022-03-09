import foodItem from './food-item';
import hamburgerImg from './images/hamburger.jpg';
import cakeImg from './images/cake.jpg';
import saladsImg from './images/salads.jpg';

const foods = [
  {
    name: 'Hamburger',
    src: hamburgerImg,
    description: 'This is definitely a hamburger. With fries!'
  },
  {
    name: 'Cake',
    src: cakeImg,
    description: 'Let them eat cake!'
  },
  {
    name: 'Salads',
    src: saladsImg,
    description: 'We got some salads too.'
  }
]

const menu = () => {
  const menu = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = 'This is our menu!';
  menu.appendChild(headline);

  const foodItems = document.createElement('div');
  foodItems.className = 'food-items';

  foods.forEach(food => {
    const item = foodItem(food.src, food.name, food.description);
    item.className = 'food-item';
    foodItems.appendChild(item);
  });

  menu.appendChild(foodItems);

  return menu;
}

export default menu;