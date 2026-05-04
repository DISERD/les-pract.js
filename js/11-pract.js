// 1. Оголоси змінну apartment і задай їй об'єкт,
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію, 
// значення ["premium", "promoted", "top"].

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

apartment.owner = {};
const ownerName = "Genry";

console.log(apartment);

apartment.owner.name = ownerName;
apartment.price = 75000;
apartment.rating = 4.7;
apartment.tags.push("trusted");


// 2. 
const area = 60;
const rooms = 3;
const key = "location";

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  area,
  rooms,
  [key]: {
    country: "USA",
    city: "Los Angeles",
  },
  changePrice(newPrice) {
    this.price = newPrice;
  },
  showDescr() {
    console.log(this.descr);
  },
  showRating() {
    return this.rating;
  },
  addTag(newTag) {
    this.tags.push(newTag);
  },
};

console.log(apartment.showRating());

apartment.addTag("city center");
apartment.changePrice(50000);
apartment.showDescr();

apartment.owner = {};
const ownerName = "Genry";

console.log(apartment);

apartment.owner.name = "Vova";
// apartment.price = 75000;
// apartment.rating = 5;
apartment.tags.push("trusted");

console.log(apartment);


// 1
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps] ;
 console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 2
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores] ;
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores); 
console.log( allScores);
console.log(bestScore);
console.log(worstScore);

// 3
// Функція getExtremeScores (scores)
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() i Math.min().
const getExtremeScores = function (array) {
let best = Math.max(...array);
let worst = Math.min(...array);
console.log(best);
console.log(worst);
return {
best,
worst,
}
}
getExtremeScores ([89, 64, 42, 17, 93, 51, 26]) //{ best: 93, worst: 17 }
getExtremeScores ([19, 7, 4, 17, 81, 24]) //{ best: 81, worst: 4 }