let array = [];
while (true) {
  const number = prompt("Введите число");
  array.push(number);
  if (isNaN(+number) === true || number === null) {
    array.splice(array.length-1,1,0);
    alert(`Сумма: ${array.reduce((a, b) => Number(a) + Number(b))}`);
    break;
  }
}