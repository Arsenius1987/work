import './style.css'


// // Задача 10: Запросите у пользователя целое число и выведите ответ, четное число или нет. В задании
// // используйте логические операторы. В задании не надо использовать if или swich.

alert(`Задача 10: Запросите у пользователя целое число и выведите ответ, четное число или нет. В задании
используйте логические операторы. В задании не надо использовать if или swich.`);
var a = prompt('Введите число для проверки на четность: ');
a = Number(a);
alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");

// // Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения
// // задачи вам понадобится оператор % (остаток от деления).

alert(
  "Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)"
);
nmb = prompt('Введите трехзначное число: ');
var a = Number(nmb % 10);
var b = Number((nmb - a) / 10 % 10);
var c = Number((nmb - a - b * 10) / 100);
alert('Перевертыш: ' + (a * 100 + b * 10 + c));

// // Задача 8: Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько
// // шоколадок может купить пользователь и сколько сдачи у него останется.

alert(`Задача 8: Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь и сколько сдачи у него останется.`);
var sum = prompt("Cколько у вас в бумажнике денег? ");
var price = prompt("И почем одна шоколадка? ");
sum = Number(sum);
price = Number(price);
var sell = Math.trunc(sum / price);
var change = sum - price * sell;
if (sell < 1) {
  alert('Сегодня вы на нуле. приходите в другой раз');
}
else {
  alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (sum - price * sell) + ' рублей ');
}

// Задача 7: Пользователь указывает объем флешки в Гб. Программа должна посчитать,
//сколько файлов размеров в 820 Мб помещается на флешку.

alert('Задача 7: Пользователь указывает объем флешки в Гб.Программа должна посчитать, сколько файлов размеров в 820 Мб помещается на флешку.');
const GB_MB = 1024;
var flash_drive = Number(prompt('Каков объем вашей флешки в Гб? '));
var size = Math.trunc(flash_drive * 1000 / GB_MB);
if (size < 0) {
  alert('Ваша флешка перезаполнена, освободите пространство');
}
else {
  alert('На флешку поместится ' + size + ' файлов объемом 820 Мб');
}

// Задача 6: Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
// Курс валют храните в константе.

alert('Задача 6: Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валют храните в константе.');
const rate = Number(prompt('Введите текущий курс доллара по отношению к евро: '));
var dollar = Number(prompt('Введите количество долларов для обмена: '));
alert("По текущему курсу при обмене вы получите " + dollar * rate + " евро");

// Задача 5: Запросите у пользователя расстояние в км между двумя городами и за сколько часов
// он хочет добраться. Посчитайте скорость, чтобы успеть вовремя.

alert(`Задача 5: Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, чтобы успеть вовремя.`);
var distance = Number(prompt("Введите расстояние между городами в км: "));
var time = Number(prompt('За какое время вы хотите преодолеть это расстояние в часах? '));
alert('Вам необходимо двигаться со средней скоростью ' + distance / time + ' км/ч');

// Задача 4: Запросите у пользователя радиус окружности и выведите площадь такой окружности.

alert('Задача 4: Запросите у пользователя радиус окружности и выведите площадь такой окружности.');
var radius = Number(prompt('Введите радиус окружности: '));
var square = Math.PI * radius ** 2;
alert('Площадь окружности: '+ square);

// Задача 3: Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

alert('Задача 3: Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.');
side_lengh = Number(prompt('Введите длину стороны квадрата: '));
alert('Периметр квадрата равен: ' + 4 * side_lengh);

// Задача 2: Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
// Текущий год укажите в коде как константу.

alert(
  `Задача 2: Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.Текущий год укажите в коде как константу.`
);
var year_of_birth = Number(prompt('В каком году вы родились? '));
const this_year = Number(prompt('Какой сейчас год? '));
alert('В текущем году вам стукнет ' + (this_year - year_of_birth) + ' лет');

// Задание 1: Запросите у пользвателя его имя и выведите в ответ: "Привет, его имя!"

name = prompt('Как вас зовут? ');
alert('Привет, ' + name + '!');


function task_10() {
    // Задание 10: Игра "Угадай число". Предложить пользователю загадать число от 0 до 100 и отгадать
    // его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете
    // результат в N и спрашиваете у пользователя "Ваше число > N, < N или == N?". В зависимости
    // от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100,
    // поделили пополаи и получили 50. Если пользователь указал, что его число > 50, то изменили
    // диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
  
    alert(
      'Задание 10: Игра "Угадай число". Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя "Ваше число > N, < N или == N?". В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополаи и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до те пор, пока пользователь не выберет == N.'
    );
    alert(
      "Что ж, давайте поиграем! Только честно и без мухлежа! Сейчас я вам предложу ввести целое число в диапазоне от 0 до 100. Потом я логическими вопросами буду отсекать ненужные числа и докажу, что угадаю ваше загаданное число не более чем за 7 попыток! Прошу не лукавить и не мухлевать!"
    );
    let N = 0;
    do {
      N = Math.trunc(
        +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
      );
    } while (N < 0 || N > 100);
    alert(`Итак, будем играться с числом ${N}.`);
  
    let counter = 0; // счётчик попыток угадать число
    let low = 0; // нижняя граница диапазона разбиения
    let middle = 0; // середина разбиения диапазона
    let high = 100; // верхняя граница разбиения диапазона
    let condition = ""; // отклик пользователя =, <, > на предложенный вариант числа, пока что просто пустая строка
  
    while (low <= high) {
      middle = Math.trunc((low + high) / 2);
      condition = prompt(
        `Вы загадали число ${middle}? Введите без кавычек "=", если это так. В противном случае, если искомое число меньше, введите "<", либо же ">", если оно больше. Опять же, без кавычек.`
      );
      // это был отклик пользователя
  
      if (condition != "=" && condition != "<" && condition != ">") {
        alert(
          "Вы вводите посторонние символы, я вас не понимаю! Будьте внимательнее!"
        );
        continue;
        // здесь исключаем ввод опечаток
      }
      if (
        (condition != "=" && middle == N) ||
        (condition == "<" && middle < N) ||
        (condition == ">" && middle > N) ||
        (condition == "=" && middle != N)
      ) {
        alert(
          `Кто-то мухлюет! Знак "${condition}" здесь совсем неуместен! Попробуйте снова!`
        );
        continue;
      } // здесь исключаем ложь в ответах
      if (condition == ">") {
        low = middle + 1;
      } else if (condition == "<") {
        high = middle - 1;
      } else {
        low = high + 1;
      }
      counter++;
    }
    alert(
      `Итак, за ${counter} попыток бинарным поиском мы установили, что вы загадали число ${middle}!`
    );
  }
  task_10();
  
  function task_9() {
    // Задание 9: Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
  
    alert(
      "Задание 9: Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10."
    );
    let table = "";
    for (let i = 2; i <= 9; i++) {
      for (let j = 1; j <= 10; j++) {
        table += `${i} x ${j} = ` + i * j + ", ";
      }
    }
    alert(table);
  }
  task_9();
  
  function task_8() {
    // Задание 8: Зациклить вывод дней недели таким образом:"День недели. Хотите увидеть следующий день?"
    // и так до до тех пор, пока пользователь нажимает ОК.
  
    alert(
      'Задание 8: Зациклить вывод дней недели таким образом:"День недели. Хотите увидеть следующий день?" и так до до тех пор, пока пользователь нажимает ОК.'
    );
    let arr_Week = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ];
    let i = 0;
    let stop = true;
    while (stop == true) {
      stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
      i++;
      if (i > 6) {
        i = 0;
      }
    }
    alert("Вывод дней недели окончен!");
  }
  task_8();
  
  function task_7() {
    // Задание 7_1: Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести
    // результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
  
    alert(
      "Задание 7_1: Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612)."
    );
    let base_number = prompt("Введите число, которое будем трансформировать: ");
    let jump = Math.abs(
      Math.trunc(
        +prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")
      )
    );
    let arr = base_number.split("");
    jump = jump % arr.length; //если пользователь указал при сдвиге число больше длины строки
    let leftJump_L = arr.slice(0, jump); //новая строка при сдвиге влево (левая половинка начальной, которая уедет в конец новой строки)
    let leftJump_R = arr.slice(jump, arr.length); //новая строка при сдвиге влево (правая половинка начальной, которая уедет в начало новой строки)
    alert(
      `Сдвиг влево "${base_number}" на ${jump} позиций:  ` +
        leftJump_R.concat(leftJump_L).join("")
    ); //объединяем 2 половины
    let rightJump_L = arr.slice(0, arr.length - jump); //новая строка при сдвиге вправо (левая половинка начальной, которая уедет в конец новой строки)
    let rightJump_R = arr.slice(arr.length - jump, arr.length); //новая строка при сдвиге вправо (правая половинка начальной, которая уедет в начало новой строки)
    alert(
      `Сдвиг вправо "${base_number}" на ${jump} позиций:  ` +
        rightJump_R.concat(rightJump_L).join("")
    ); //объединяем 2 половины
  }
  task_7();
  
  function task_7_2() {
    // Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести
    // результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
    // Вариант 2: решим через циклы, а не массивы
  
    alert(
      "Задание 7_2: ВТОРОЙ ВАРИАНТ РЕШЕНИЯ ЗАДАЧИ МЕТОДОМ ЦИКЛОВ. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612)."
    );
    let base_number = Math.abs(
      Math.trunc(+prompt("Введите число, которое будем трансформировать: "))
    );
    let jump = Math.abs(
      Math.trunc(
        +prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")
      )
    );
    let array = [];
    let new_base_number = base_number;
    while (base_number > 0) {
      array.unshift(base_number % 10);
      base_number = Math.trunc(base_number / 10);
    } // в этом цикле мы разбили число по разрядам, каждую цифру разряда числа вписали в массив
    let new_jump = jump;
    jump = jump % array.length; //если пользователь указал при сдвиге число больше длины строки
    // с данного места приступаем к работе со сдвигом
    let arrJumpLeft_L = [];
    let arrJumpLeft_R = [];
    let arrJumpRight_L = [];
    let arrJumpRight_R = [];
    for (let i = 0; i < array.length; i++) {
      if (i < jump) {
        arrJumpLeft_L[i] = array[i];
      } else {
        arrJumpLeft_R[i] = array[i];
      }
      if (i < array.length - jump) {
        arrJumpRight_L[i] = array[i];
      } else {
        arrJumpRight_R[i] = array[i];
      }
    }
    alert(
      `Сдвиг вправо "${new_base_number}" на ${new_jump} позиции: ` +
        arrJumpRight_R.concat(arrJumpRight_L).join("")
    ); //объединяем 2 половины
    alert(
      `Сдвиг влево "${new_base_number}" на ${new_jump} позиции: ` +
        arrJumpLeft_R.concat(arrJumpLeft_L).join("")
    ); //объединяем 2 половины
  }
  task_7_2();
  
  function task_6() {
    // Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить,
    //хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
  
    alert(
      "Задание 6: Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется."
    );
    let numberA = 0;
    let numberB = 0;
    let result = true;
    let action_sign = "";
    do {
      numberA = +prompt("Введите первое число: ");
      numberB = +prompt("Введите второе число: ");
      action_sign = prompt("Введите знак операции (*, /, + либо -): ");
      switch (action_sign) {
        case "+":
          alert(
            `${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`
          );
          break;
        case "-":
          alert(
            `${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`
          );
          break;
        case "*":
          alert(
            `${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`
          );
          break;
        case "/":
          alert(
            `${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`
          );
          break;
        default:
          alert(`Вы не ввели знак математической операции!`);
          break;
      }
      result = confirm("Хотите выполнить еще одну математическую операцию?");
    } while (result == true);
  }
  task_6();
  
  function task_5() {
    // Задание 5: Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
    // отрицательных и нулей. При этом также подсчитать, сколько четных и нечетных. Вывести
    // статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода
    // чисел пользователем.
  
    alert(
      "Задание 5: Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также подсчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем."
    );
    let n = 0;
    let positive_number = 0;
    let negative_number = 0;
    let null_number = 0;
    let even_number = 0;
    let odd_number = 0;
    for (let i = 0; i < 10; i++) {
      n = +prompt("Введите число: ");
      if (n > 0) {
        positive_number += 1;
      } else if (n < 0) {
        negative_number += 1;
      } else {
        null_number += 1;
      }
      !(n % 2) ? (even_number += 1) : (odd_number += 1);
    }
    alert(
      `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
    );
  }
  task_5();
  
  function task_4() {
    // Задание 4: Определить количество чисел в введенном числе.
    alert("Задание 4: Определить количество чисел в введенном числе.");
    let n = Math.abs(+prompt("Введите число: "));
    let counter = 0;
    while (n > 0) {
      n = Math.trunc(n / 10);
      counter++;
    }
    alert(`В введенном вами числе (в его целой части) ${counter} цифр.`);
  }
  task_4();
  
  function task_3() {
    // Задание 3: Запросить у пользователя число и вывести все делители этого числа.
    alert(
      "Задание 3: Запросить у пользователя число и вывести все делители этого числа."
    );
    let n = +prompt("Введите число: ");
    let new_n = Math.abs(n);
    let divisors = "";
    let i = 1;
    do {
      if (new_n % i == 0) {
        divisors += i + ",";
      }
      i++;
    } while (i <= new_n);
    alert(`У числа ${n} следующие делители: ${divisors}`);
  }
  task_3();
  
  function task_2() {
    // Задание 2: Запросить у пользователя 2 числа и найти только наибольший общий делитель.
    alert(
      "Задание 2: Запросить у пользователя число и вывести все делители этого числа."
    );
    let n = +prompt("Введите первое число: ");
    let m = +prompt("Введите второе число: ");
    let new_n = Math.abs(n);
    let new_m = Math.abs(m);
    let max_divisor = 1;
    let i = 1;
    while (i <= new_n && i <= new_m) {
      if (new_n % i == 0 && new_m % i == 0) {
        max_divisor = i;
      }
      i++;
    }
    alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);
  }
  task_2();
  
  function task_1() {
    // Задание 1: Подсчитать сумму всех чисел в заданном пользователем диапазоне.
    alert(
      "Задание 1: Подсчитать сумму всех чисел в заданном пользователем диапазоне."
    );
    let a = Math.trunc(
      +prompt("Задайте целое число, которое будет началом диапазона: ")
    );
    let a1 = a;
    let b;
    do {
      b = Math.trunc(
        +prompt("Задайте целое число, которое будет концом диапазона: ")
      );
    } while (a >= b);
    let summa = 0;
    while (a <= b) {
      summa += a;
      a++;
    }
    alert(`В диапазоне от ${a1} до ${b} включительно сумма всех чисел составляет: ${summa}.`);
  }
  task_1();

  // Задание 1: Написать функцию возведения числа в степень, используя рекурсию.

function Task1() {
    function Exponentiation(a, b) {
      if (b == 1) {
        return a;
      } else {
        return a * Exponentiation(a, b - 1);
      }
    }
    alert(
      "Задание 1: Написать функцию возведения числа в степень, используя рекурсию."
    );
  
    let x = 0;
    let y = 0;
    do {
      x = +prompt("Введите число, которое будем возводить в степень ");
      y = Math.trunc(+prompt("Введите степень, в которую надо возвести число "));
    } while (y < 1);
    alert(Exponentiation(x, y));
  }
  Task1();
  
  // Задание 2: Написать функцию поиска наибольшего делителя, используя рекурсию.
  
  function Task2() {
    function GreatestCommonDivisor(a, b) {
      if (a == 0) {
        return b;
      } else {
        return GreatestCommonDivisor(b % a, a);
      }
    }
  
    alert(
      "Задание 2: Написать функцию поиска наибольшего делителя, используя рекурсию."
    );
  
    let x = +prompt("Введите первое число: ");
    let y = +prompt("Введите второе число: ");
  
    alert("Наибольший общий делитель: " + GreatestCommonDivisor(x, y));
  }
  Task2();
  
  // Задание 3: Написать функцию для поиска максимальной цифры в числе, использую рекурсию.
  
  function Task3() {
    function MaxDigitNumber(a, maxDigit) {
      if (a == 0) {
        return maxDigit;
      } else {
        if (maxDigit < a % 10) {
          maxDigit = a % 10;
        }
        return Math.trunc(MaxDigitNumber(a / 10, maxDigit));
      }
    }
  
    alert(
      "Задание 3: Написать функцию для поиска максимальной цифры в числе, использую рекурсию."
    );
    let y = 0;
    let x = Math.trunc(Math.abs(+prompt("Введите число: ")));
    alert("Наибольшая цифра в данном числе " + MaxDigitNumber(x, y));
  }
  Task3();
  
  // Задание 4: Написать функцию, которая определяет, простое ли переданное число. Использовать рекурсию.
  
  function Task4() {
    function PrimeNumber(a, b) {
      if (a % b == 0 && b >= 2) {
        return alert("Данное число не является простым.");
      } else {
        if (b == 1) {
          return alert("Да, это простое число.");
        }
        return PrimeNumber(a, b - 1);
      }
    }
    alert(
      "Задание 4: Написать функцию, которая определяет, простое ли переданное число. Использовать рекурсию."
    );
  
    let x = 2;
  
    do {
      x = Math.trunc(Math.abs(+prompt("Введите натуральное число больше 2: ")));
    } while (x <= 2);
    let y = x - 1;
    PrimeNumber(x, y);
  }
  Task4();
  
  // Задание 5: Написать функцию, для вывода всех множителей переданного числа в возрастающем порядке.
  // Например: число 18 - множители 2 * 3 * 3.
  
  function Task5() {
    function Multiplier(a, b, c) {
      if (b > a ** 0.5) {
        c.push(a);
        return c;
      } else if (a % b == 0) {
        c.push(b);
        Multiplier(a / b, b, c);
      } else {
        Multiplier(a, b + 1, c);
      }
      return c.join("*");
    }
    alert(
      "Задание 5: Написать функцию, для вывода всех множителей переданного числа в возрастающем порядке. Например: число 18 - множители 2 * 3 * 3."
    );
    let x = Math.trunc(+prompt("Введите число: "));
    let y = 2;
    let z = [];
  
    alert(Multiplier(x, y, z));
  }
  Task5();
  
  // Задание 6: Написать функцию рекурсии, которая возвращает число Фибоначи по переданному порядковому номеру.
  // Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13... Ряд основывается на том, что кажое число равно сумме двух
  // предыдущих чисел. Например: порядковый номер 3 - число 2, порядковый номер 6 - число 8.
  
  function Task6() {
    function Fibonacci(a) {
      if (a == 1 || a == 2) {
        return 1;
      }
      return Fibonacci(a - 1) + Fibonacci(a - 2);
    }
  
    alert(
      "Задание 6: Написать функцию рекурсии, которая возвращает число Фибоначи по переданному порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13... Ряд основывается на том, что кажое число равно сумме двух предыдущих чисел. Например: порядковый номер 3 - число 2, порядковый номер 6 - число 8."
    );
  
    do {
      x = Math.trunc(
        +prompt("Введите порядковый номер числа из ряда Фибоначчи: ")
      );
    } while (x < 1);
  
    alert(Fibonacci(x));
  }
  Task6();