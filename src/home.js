const home = () => {
  const home = document.createElement('div');
  home.className = 'home';

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to our restaurant!';
  home.appendChild(headline);

  const text = document.createElement('p');
  text.textContent = "This isn't a very good restaurant!";
  home.appendChild(text);

  return home;
}

export default home;