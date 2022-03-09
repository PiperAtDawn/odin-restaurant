const contact = () => {
  const contact = document.createElement('div');
  contact.className = 'contact-us';

  const headline = document.createElement('h1');
  headline.textContent = 'Contact us!';
  contact.appendChild(headline);

  const text = document.createElement('p');
  text.textContent = "You can't contact us beacuse we don't exist! Oh well!";
  contact.appendChild(text);

  return contact;
}

export default contact;