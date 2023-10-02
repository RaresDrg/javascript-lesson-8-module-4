/*Example 7 - Sort method

Let the `sortByAscendingAmount` function return a new array of cars
sorted in ascending order by the value of the `amount` property.
*/

import { cars } from "./carsData.js";
console.table(cars);

const sortByAscendingAmount = (cars) => cars.sort((a, b) => a.amount - b.amount);

const sortByAscendingAmountLong = (cars) => {
  const carsAscendingAmount = cars.sort((a, b) => {
    return a.amount - b.amount;
  });

  return carsAscendingAmount;
};

console.table(sortByAscendingAmount(cars));
console.table(sortByAscendingAmountLong(cars));