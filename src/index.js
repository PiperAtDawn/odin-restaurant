import './style.css';
import home from './home';
import menu from  './menu';
import contact from './contact';

const navBtn = (text, id) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.id = id;
  btn.type = 'button';
  btn.className = 'nav-btn';
  return btn;
}

const container = () => {
  const container = document.createElement('div');
  container.className = 'container';
  return container;
}

document.body.appendChild(container());
const containerDiv = document.querySelector('.container');

const navBar = () => {
  const navBar = document.createElement('nav');

  const homeBtn = navBtn('Home', 'home-btn');
  homeBtn.addEventListener('click', () => switchTab(home));

  const menuBtn = navBtn('Menu', 'menu-btn');
  menuBtn.addEventListener('click', () => switchTab(menu));

  const contactBtn = navBtn('Contact us', 'contact-btn');
  contactBtn.addEventListener('click', () => switchTab(contact));

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);

  return navBar;
}

containerDiv.appendChild(navBar());

const main = document.createElement('main');
containerDiv.appendChild(main);
main.appendChild(home());


const switchTab = (newTab) => {
  main.innerHTML = '';
  main.appendChild(newTab());
}
