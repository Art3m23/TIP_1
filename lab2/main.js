const firstcatet = prompt('Введите значение первого катета');
const secondcatet = prompt('Введите значение второго катета');
const result = confirm(`значение первого катета: ${firstcatet}` + "\n" + `значение второго катета: ${secondcatet}` + "\n" + 'Все верно?');
if (result) {
  alert(`Гипотенуза равна: ${(Math.sqrt(Math.pow(firstcatet,2)+Math.pow(firstcatet,2)).toFixed(2))}`);
} else {
  alert('Ошибка Данных');
} 