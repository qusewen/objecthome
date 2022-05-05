// I. Создайте объект с тремя свойствами.
const firsObj = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 26,
};

// II. Добавьте к нему два новых свойствa
const secondObj = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 26,
};

secondObj.sity = "Mogilev";
secondObj.gender = "male";

// III. Добавьте к объекту два метода, первый использует в качестве параметров внешние
// данные, второй - имеющиеся свойства объекта.

const therdObj = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 26,
  sity: "Mogilev",
  gender: "male",
  matPow: function (a, b) {
    return a ** b;
  },
  inFoo() {
    return `Ваши данные: Вас зову - ${this.firstName} вам - ${this.age} лет, вы из  ${this.sity}`;
  },
};
console.log(therdObj);
console.log(therdObj.matPow(3, 5));
console.log(therdObj.inFoo());

//   IV. Создайте функцию, которая выводит в консоль свойства и значения объекта в виде
// строки - "property: value."
// Пример работы функции:
// {name: 'Jorge',
// surname: 'Luis',
// secondSurname: ' Borges'}
// =>
// name: Jorge
// surname: Luis
// secondSurname: Borges

const forObj = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 26,
  city: "Mogilev",
};
function foo() {
  for (let i in forObj) {
    console.log(`${i} : ${forObj[i]}`);
  }
}

console.log(foo());

// V. Создайте функцию, которая определяет, является ли объект многоуровневым,
// другими словами, обладает ли объект свойствами, которые тоже представляют собой
// объекты.
// В качестве параметра функция принимает объект, и в случае, если объект
// многоуровневый - возвращает true, если нет - false.
// Случай, при котором свойство имеет значение null, также должен обрабатываться
// корректно.
// Пример работы функции:
// { } => false
// {name: 'Jorge', age: 12 } => false
// {
// name: 'Luis',
// age: 42,
// specialty: {
// developer: true, technology: 'React'
// }
// } => true
// {
// name: 'Luis',
// age: 42,
// specialty: null
// } => fals

const fivObj = {
  name: "Jorge",
  age: 12,
  size: {
    h: 130,
    w: "200",
    val: 180,
  },
  kese: null, // сделал случай, если вместе и obj и null что бы выводило true, если уберем obj то выдаст false
};
function testObj() {
  let a = 0;
  for (let i in fivObj) {
    if (typeof fivObj[i] === "object") {
      a = 1;
      break;
    } else {
      a = 0;
    }
    if (fivObj[i] === null) {
      a = 0;
    }
  }

  switch (a) {
    case 1:
      return true;
      break;
    case 0:
      return false;
  }
}

console.log(testObj(fivObj));
