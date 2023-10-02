/*Example 10 - Reduce method

Let the `getTotalAmount` function return the total number of cars (the value
of the `amount` properties)

*/

import { cars } from "./carsData.js";
console.table(cars);


const getTotalAmount = (cars) => cars.reduce((total, car) => total += car.amount, 0);

const getTotalAmountLong = (cars) => {
  const totalAmount = cars.reduce((total, car) => {
    return total += car.amount;
  }, 0);

  return totalAmount;
}

console.log(getTotalAmount(cars));
console.log(getTotalAmountLong(cars));

