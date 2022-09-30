const priceForOneHour = {
  html_css: 500,
  js: 1000,
  english: 300,
};

const hours = {
  '1h': 0,
  '2h': 0.2,
  '3h': 0.3,
};

const lang = {
  rus: 0,
  en: 0.1,
  deut: 0.2,
};

let sum = 0;
const coursesItem = document.querySelectorAll('.courses__item');
const coursesTime = document.querySelectorAll('.courses__time');
const index = document.querySelector('.courses__lang').selectedIndex;
const options = document.querySelector('.courses__lang').options;
console.log(options);

function getPrice() {
  coursesItem.forEach(el => {
    if (el.checked) {
      sum += priceForOneHour[el.value];
    }
  });
  coursesTime.forEach(el => {
    if (el.checked) {
      sum = sum + sum * hours[el.value];
    }
  });
  sum=sum+sum*lang[options[index].value];
  if (sum !== 0) {
    document.querySelector('#sum').value = sum + 'руб';
  }
  sum = 0;
}
document.querySelector('.courses__button').addEventListener('click', getPrice);








