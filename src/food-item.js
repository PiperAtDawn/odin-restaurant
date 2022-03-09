const foodItem = (imgSrc, title, description) => {
  const item = document.createElement('div');

  const img = document.createElement('img');
  img.src = imgSrc;
  img.className = 'food-img';
  item.appendChild(img);

  const textWrp = document.createElement('div');
  textWrp.className = 'food-text';

  const foodTitle = document.createElement('h3');
  foodTitle.textContent = title;
  textWrp.appendChild(foodTitle);

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;
  textWrp.appendChild(foodDescription);

  item.appendChild(textWrp);
  return item;
}

export default foodItem;