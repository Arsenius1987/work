// Задание 1: Запросите у пользвателя его имя и выведите в ответ: "Привет, его имя!"

name = prompt('Как вас зовут? ');
alert('Привет, ' + name + '!');

// Задача 2: Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
// Текущий год укажите в коде как константу.

alert(
    `Задача 2: Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.Текущий год укажите в коде как константу.`
  );
  var year_of_birth = Number(prompt('В каком году вы родились? '));
  const this_year = Number(prompt('Какой сейчас год? '));
  alert('В текущем году вам стукнет ' + (this_year - year_of_birth) + ' лет');