// 1. Метод forEach. Є масив чисел prices. Використовуючи forEach, додай кожне число до змінної totalPrice та виведи результат.

const prices = [150, 300, 50, 420];
let totalPrice = 0;

prices.forEach(function(price) {
  totalPrice += price;
});

console.log(totalPrice);


// 2. Метод map. Є масив об'єктів students. Використовуючи map, створи новий масив studentNames, який міститиме лише імена студентів.

const students = [
  { name: "Олег", score: 85 },
  { name: "Марія", score: 92 },
  { name: "Антон", score: 78 }
];

const studentNames = students.map(function(student) {
  return student.name;
});

console.log(studentNames);


// 3. Метод filter. Використовуючи filter, створи новий масив highScores, куди увійдуть лише ті студенти з масиву students, бал яких більший або дорівнює 85.

const highScores = students.filter(function(student) {
  return student.score >= 85;
});

console.log(highScores);


// 4. Метод find. Є масив products. Використовуючи find, знайди об'єкт товару з id рівним 2 і запиши його у змінну targetProduct.

const products = [
  { id: 1, title: "Ноутбук", price: 25000 },
  { id: 2, title: "Смартфон", price: 12000 },
  { id: 3, title: "Планшет", price: 8000 }
];

const targetProduct = products.find(function(product) {
  return product.id === 2;
});

console.log(targetProduct);


// 5. Методи every та some. Перевір, чи всі товари коштують більше 5000 (allExpensive). Потім перевір, чи є хоча б один товар дорожчий за 20000 (hasVeryExpensive).

const allExpensive = products.every(function(product) {
  return product.price > 5000;
});

const hasVeryExpensive = products.some(function(product) {
  return product.price > 20000;
});

console.log(allExpensive);
console.log(hasVeryExpensive);