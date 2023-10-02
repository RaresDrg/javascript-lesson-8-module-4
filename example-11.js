/*Example 11 - Method chains

Let the `getAvailableCarNames` function return an array of car models, but
only those that are currently for sale.
*/

import { cars } from "./carsData.js";
console.table(cars);

const getModelsOnSale = (cars) => cars
  .filter((car) => car.onSale)
  .map((car) => car.model)
;


const getModelsOnSaleLong = (cars) => {
  const modelsOnSale = cars.filter((car) => {
    return car.onSale
  })

  const arrayOfModelsOnSale = modelsOnSale.map((car) => {
    return car.model
  })
  
  return arrayOfModelsOnSale
}


console.table(getModelsOnSale(cars));
console.table(getModelsOnSaleLong(cars));
