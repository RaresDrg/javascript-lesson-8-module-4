/*Example 8 - Sort method

Let the `sortByDescendingPrice` function return a new array of cars
sorted in descending order by the value of the `price` property.
*/

import { cars } from "./carsData.js";
console.table(cars);

const sortByDescendingPrice = ([...cars]) => cars.sort((a, b) => b.price - a.price);
// const sortByDescendingPrice = ([...cars]) => cars.sort((a, b) => a.price - b.price).reverse();

const sortByDescendingPriceLong = ([...cars]) => {
  const carsSortedByDescendingPrice = cars.sort((a, b) => {
    return b.price - a.price;
  });

  return carsSortedByDescendingPrice;
};


console.table(sortByDescendingPrice(cars));
console.table(sortByDescendingPriceLong(cars));