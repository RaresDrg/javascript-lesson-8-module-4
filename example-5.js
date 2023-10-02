/*Example 5 - Filter method

Let the `getCarsWithType` function return an array of cars whose type
coincide with the value of the `type` parameter.
*/

import { cars } from "./carsData.js";
console.table(cars);

const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type );

const getCarsWithTypeLong = (cars, type) => {
  const carsWithType = cars.filter((car) => {
    return car.type === type;
  });

  return carsWithType;
};


console.table(getCarsWithType(cars, "suv"));
console.table(getCarsWithTypeLong(cars, "suv"));

console.table(getCarsWithType(cars, "sedan"));
console.table(getCarsWithTypeLong(cars, "sedan"));