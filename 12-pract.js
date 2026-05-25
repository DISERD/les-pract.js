// Цикл for...in
// Оголоси змінну salaries і задай їй об'єкт із зарплатами працівників. Напиши код, який використовує цикл for...in для підрахунку загальної суми зарплат і зберігає її в змінній total.
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let total = 0;

for (const key in salaries) {
  total += salaries[key];
}

console.log(total);
// Метод Object.keys()
// Створи функцію countProps(object), яка приймає об'єкт і повертає кількість його властивостей. Використай метод Object.keys() для отримання масиву ключів, а потім поверни його довжину.

const countProps = function(object) {
  const keys = Object.keys(object);
  return keys.length;
};

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// Метод Object.values()
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат. Використай Object.values(), щоб отримати масив значень усіх зарплат, і порахуй їхню загальну суму.

const countTotalSalary = function(salaries) {
  let total = 0;
  const values = Object.values(salaries);

  for (const value of values) {
    total += value;
  }

  return total;
};

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// 4. Операція ...spread для об'єктів
// У тебе є два об'єкти: defaultSettings та userSettings. Використай операцію ...spread для їх об'єднання в один новий об'єкт finalSettings. Властивості з userSettings мають переписати властивості з defaultSettings. Додай туди ж нову властивість status зі значенням "active".

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false
};

const userSettings = {
  theme: "dark",
  hideSidebar: true
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
  status: "active"
};

console.log(finalSettings);

//Присвоєння за посиланням і за значенням (копіювання)
// Створи об'єкт user. Створи змінну userRef, яка просто посилається на user. Потім створи змінну userCopy (незалежну копію) за допомогою spread-оператора. Зміни ім'я в оригінальному об'єкті user і виведи всі три в консоль, щоб перевірити, що посилання змінилося, а копія — ні.
const user = {
  name: "Alice",
  age: 25
};

const userRef = user;

const userCopy = {
  ...user
};

user.name = "Bob";

console.log(user);
console.log(userRef);
console.log(userCopy);