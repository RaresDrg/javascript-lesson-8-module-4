/*Example 6 - The find method

Let the `getCarByModel` function return that element (car) whose model
coincide with the value of the parameter.
*/

import { cars } from "./carsData.js";
console.table(cars);

const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

const getCarByModelLong = (cars, model) => {
  const carByModel = cars.find((car) => {
    return car.model === model;
  });

  return carByModel
};

console.log(getCarByModel(cars, "F-150"));
console.log(getCarByModelLong(cars, "F-150"));

console.log(getCarByModel(cars, "CX-9"));
console.log(getCarByModelLong(cars, "CX-9"));