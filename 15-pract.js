// 1. Метод reduce. Є масив чисел numbers. Використовуючи reduce, знайди їхню загальну суму та виведи результат.

const numbers = [5, 10, 15, 20, 25];

const totalSum = numbers.reduce(function(acc, number) {
  return acc + number;
}, 0);

console.log(totalSum);


// 2. Метод reduce з об'єктами. Підрахуй загальну вартість усіх товарів у кошику (масив об'єктів cart), враховуючи ціну та кількість.

const cart = [
  { name: "Яблука", price: 50, quantity: 2 },
  { name: "Хліб", price: 20, quantity: 1 },
  { name: "Молоко", price: 40, quantity: 3 }
];

const totalCartPrice = cart.reduce(function(acc, item) {
  return acc + (item.price * item.quantity);
}, 0);

console.log(totalCartPrice);


// 3. Метод sort (базовий). Відсортуй масив рядків names за алфавітом. Пам'ятай, що sort змінює оригінальний масив, тому краще зробити копію.

const names = ["Олена", "Іван", "Андрій", "Марія"];

const sortedNames = [...names].sort();

console.log(sortedNames);


// 4. Свій порядок сортування. Відсортуй масив чисел scores за зростанням у змінну ascendingScores, та за спаданням у descendingScores.

const scores = [61, 19, 74, 35, 92, 56];

const ascendingScores = [...scores].sort(function(a, b) {
  return a - b;
});

const descendingScores = [...scores].sort(function(a, b) {
  return b - a;
});

console.log(ascendingScores);
console.log(descendingScores);


// 5. Ланцюжки методів масиву (chaining). Є масив players. Знайди всіх активних гравців, відсортуй їх за віком (за зростанням) і поверни масив лише з їхніми іменами.

const players = [
  { name: "Манго", age: 25, isActive: true },
  { name: "Полі", age: 32, isActive: false },
  { name: "Ківі", age: 19, isActive: true },
  { name: "Аякс", age: 28, isActive: true }
];

const activeSortedNames = players
  .filter(function(player) {
    return player.isActive;
  })
  .sort(function(a, b) {
    return a.age - b.age;
  })
  .map(function(player) {
    return player.name;
  });

console.log(activeSortedNames);