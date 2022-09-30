const imagesIndex = document.querySelectorAll('.images__index');
const imageItem = document.querySelectorAll('.image__item');
const imagePlace = document.querySelector('.image-place');

let img = document.createElement("img");
let p = document.createElement("p");

img.style.width = '300px';

imagesIndex.forEach(el => {
  el.addEventListener('change', () => {
    imagePlace.innerHTML = '';
    p.innerHTML = 'Место для картинки';
    p.className = 'image-place__discription';
    imagePlace.style.border = '';
    imagePlace.append(p);
  });
});

function move() {
  imagesIndex.forEach(el => {
    if (el.checked) {
      imagePlace.innerHTML = '';
      imagePlace.style.border = '2px solid black';
      img.src = imageItem[el.value - 1].src;
      imagePlace.append(img);
    }
  });
}
document.querySelector('.images__button').addEventListener('click', move);
