const array = [];
while (true) {
  const number = prompt('Введите число');
  array.push(+number);
  if(number===null) {
    alert(`Введенные числа: ${[array.filter(el=>el!==null)]}` + "\n" + `Количество чисел: ${array.length-1}` + "\n" + `Сумма: ${array.reduce((a, b) => a + b)}`);
    break;
  }
}
