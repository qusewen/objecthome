//Metod of string
//1. Напишите функцию сокращения, которая принимает в качестве параметра строку
// текста, сокращает ее до длины в 30 символов, заканчивает ее многоточием и возвращает
// итоговый результат
// Пример работы функции:
// let firstSentence = 'But you have no right to call me a murderer';
// let secondSentence = 'Because they could stand that these were not monsters.';
// let thirdSentence = 'And I want to remember it. I never want to forget it.';
// stringCutter(firstSentence) -> 'But you have no right to call ...'
// stringCutter(secondSentence) -> 'Because they could stand that ...'
// stringCutter(thirdSentence) -> 'And I want to remember it. I n...'
function cutMetod(str) {
  return str.slice(0, 30) + "...";
}
let firstSentence = "But you have no right to call me a murderer";
let secondSentence = "Because they could stand that these were not monsters.";
let thirdSentence = "And I want to remember it. I never want to forget it.";
console.log(cutMetod(firstSentence));
console.log(cutMetod(secondSentence));
console.log(cutMetod(thirdSentence));

// 2. Напишите функцию, которая "инвертирует" регистр введенной строки. Другими
// словами, меняет большие буквы на маленькие и наоборот.
function lowerApercase(str1) {
  let str = "";
  for (let i = 0; i < str1.length; i++) {
    switch (str1[i] === str1[i].toLowerCase()) {
      case false:
        str = str + str1[i].toLowerCase();
        break;
      case true:
        str = str + str1[i].toUpperCase();
        break;
    }
  }
  return str;
}

//3Напишите функицию, которая принимает в качестве параметра текст (строку) и
// анализирует ее на количество символов без пробелов, количество слов и определяет
// характер предложения (вопросительное, отрицательное, утвердительное). Собранные
// данные возвращаются в виде объекта следующего формата:
function testText(str2) {
  testTextObj = {
    allSymbols: str2.length,
    symbolsWithoutSpaces: str2.split(" ").join("").length,
    quantityOfWords: str2.split(" ").length,
  };
  let typetext = "";
  if (str2.slice(-1) === "?") {
    typetext = "question";
  } else if (str2.slice(-1) === ".") {
    typetext = "affirmative";
  } else if (str2.slice(0, 2) === "No" || str2.slice(0, 2) === "no") {
    typetext = "negative";
  } else {
    typetext = null;
  }
  testTextObj.sentenceType = typetext;
  return testTextObj;
}

// 4. Напишите функцию модерации, которая принимает в качестве параметров
// предложение (строку) текста и запрещенное слово, и при наличии в предложении
// запрещенного слова в любом регистре, заменяет его символы на астериксы ('звездочки')
// - * и возвращает измененное предложение.
// В случае, если запрещенного слова в предложении нет, возвращает предложение без
// изменений.

let firstSentences = "Follow the white raBbiT";
let secondSentences = "Call me Ishmael";
let thirdSentences = "Repent before bloody rabbit punish you!";
let bannedWord = "rabbit";

function banFunc(sen) {
  let arr = sen.split(" ");
  let newStr1 = sen.split(" ").join(" ").toLowerCase();
  let newArr = newStr1.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    let cont = 0;
    switch (newArr[i] === bannedWord) {
      case true:
        count = i;
        arr[count] = "******";
        break;
      case false:
        break;
    }
  }
  return arr.join(" ");
}
console.log(banFunc(firstSentences));
console.log(banFunc(secondSentences));
console.log(banFunc(thirdSentences));
