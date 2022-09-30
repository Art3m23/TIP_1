document.querySelector('.button').addEventListener('click', () => {
  const A = document.querySelector('#A');
  const B = document.querySelector('#B');
  const array = document.querySelector('#array');
  const arr = document.querySelector('#arr');
  const size = document.querySelector('#size');
  let a = [];
  console.log(A.value);
  const isEven = x => Math.pow(x, 2) < 10;
  if (isNaN(+B.value) === false && typeof (+A.value) === 'number' && isNaN(+A.value) === false && typeof (+B.value) === 'number' && isNaN(+size.value) === false && typeof (+size.value) === 'number') {
    for (let i = 0; i < +size.value; i++) {
      Number(B.value) > Number(A.value) ? a.push(Math.floor(Math.random() * (Number(B.value) - Number(A.value))) + Number(A.value)) : a.push(Math.floor(Math.random() * (Number(A.value) - Number(B.value))) + Number(B.value));
    }
    arr.value = a;
    array.value = filt(a, isEven);
    A.value = '';
    B.value = '';
    size.value = '';
  } else {
    A.value = '';
    array.value = 'Вы ввели не число.';
    B.value = '';
    size.value = '';
  }
  arr.value = a;
  function filt(arr, isEven) {
    return arr.filter(el => isEven(el));
  }
});
