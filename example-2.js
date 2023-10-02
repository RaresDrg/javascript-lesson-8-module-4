/*Example 2 - Map method

Let the makeCarsWithDiscount function return a new array of objects with a 
changed value of the price property depending on the discount passed.
*/

import { cars } from "./carsData.js";


const makeCarsWithDiscount = (cars, discount) => cars.map((car) =>
  ({
    ...car,
    price: car.price - (car.price * discount)
  })
);  // * obiectul trebuie situat intre paranteze simple, pentru a nu se confunda cu functia


const makeCarsWithDiscountLong = (cars, discount) => {
  const carsWithDiscount = cars.map((car) => {
    return {
      ...car,
      price: car.price - car.price * discount,
    };
  });
  return carsWithDiscount;
};

const makeCarsWithDiscountLongV2 = (cars, discount) => {
  return cars.map((car) => {
    return {
      ...car,
      price: car.price - car.price * discount
    };
  });
};


console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscountLong(cars, 0.2));
console.table(makeCarsWithDiscountLongV2(cars, 0.2));