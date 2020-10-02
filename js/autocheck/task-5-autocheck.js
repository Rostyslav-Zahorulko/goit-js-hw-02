// Задача 2-5

// Функция предикат

// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// ***************************************************************************************************************************

function checkForSpam(str) {
  'use strict';
  // Write code under this line
  const forbiddenWord1 = 'spam';
  const forbiddenWord2 = 'sale';

  console.log(str.toLowerCase());

  return (
    str.toLowerCase().includes(forbiddenWord1) ||
    str.toLowerCase().includes(forbiddenWord2)
  );
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
