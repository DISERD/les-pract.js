// 1. Базова деструктуризація об'єкта
// Оголоси змінну user і задай їй об'єкт з властивостями name, age та email. 
// Використовуючи деструктуризацію об'єкта, створи змінні name, age та email 
// і виведи їх у консоль.

const user = {
  name: "Олександр",
  age: 25,
  email: "alex@example.com"
};

const { name, age, email } = user;

console.log(name);
console.log(age);
console.log(email);


// 2. Зміна імен змінних та значення за замовчуванням
// Є об'єкт book. Зроби деструктуризацію так, щоб:
// - властивість title записалася у змінну bookTitle;
// - властивість author записалася у змінну author;
// - властивість rating записалася у змінну rating, а якщо 
//   її немає в об'єкті — задай їй значення за замовчуванням 5.

const book = {
  title: "JavaScript для початківців",
  author: "Іван Іванов"
};

const { title: bookTitle, author, rating = 5 } = book;

console.log(bookTitle);
console.log(author);
console.log(rating);


// 3. Глибока (вкладена) деструктуризація
// Створи об'єкт company, який містить назву name та вкладений об'єкт location 
// з властивостями country та city. За допомогою однієї лінійки деструктуризації 
// отримай змінні name, country та city.

const company = {
  companyName: "Tech Solutions",
  location: {
    country: "Україна",
    city: "Київ"
  }
};

const { companyName, location: { country, city } } = company;

console.log(companyName);
console.log(country);
console.log(city);


// 4. Деструктуризація масивів
// Є масив rgb. Отримай перші два елементи у змінні red та green, 
// а третій елемент просто проігноруй.

const rgb = [255, 128, 0];

const [red, green] = rgb;

console.log(red);
console.log(green);


// 5. Деструктуризація в параметрах функції
// Напиши функцію printUser, яка приймає об'єкт користувача. 
// Деструктуризуй властивості name та age прямо в круглих дужках 
// (параметрах) функції та виведи їх у консоль.

const person = {
  personName: "Марія",
  personAge: 30,
  role: "admin"
};

const printUser = function({ personName, personAge }) {
  console.log(personName);
  console.log(personAge);
};

printUser(person);