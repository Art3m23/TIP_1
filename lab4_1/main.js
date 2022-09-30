const age = prompt('Введите возраст');
if (age < 18) {
  const result = confirm('Родители разрешили?');
  if (result) {
    const password = prompt('Введите пароль');
    if (password === 'Даем добро') {
      alert('Добро пожаловать!');
    } else if(password !== 'Даем добро' && password !== null){
      alert('Пароль неверен');
    } else {
      alert('Вход отменён');
    }
  } else {
    alert('Доступ запрещен');
  }
} else {
  alert('Добро пожаловать!');
}