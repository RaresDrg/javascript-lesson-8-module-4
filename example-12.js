/*Example 12 - Method chains

Let the `getSortedCarsOnSale` function return an array of cars for sale
(onSale property), sorted by price ascending.
*/

import { cars } from "./carsData.js";
console.table(cars);

const getSortedCarsOnSale = ([...cars]) => cars
  .filter((car) => car.onSale)
  .map((car) => ({ name: `${car.make} - ${car.model}`, price: car.price }))
  .sort((a, b) => a.price - b.price)
;
 

const getSortedCarsOnSaleLong = ([...cars]) => {
  const modelsOnSale = cars.filter((car) => {
    return car.onSale;
  });

  const arrayOfModelsOnSale = modelsOnSale.map((car) => {
    return {name: `${car.make} - ${car.model}`, price: car.price}
  });

  const arrayOfModelsOnSaleSorted = arrayOfModelsOnSale.sort((a, b) => {
    return a.price - b.price;
  });

  return arrayOfModelsOnSaleSorted;
};


console.table(getSortedCarsOnSale(cars));
console.table(getSortedCarsOnSaleLong(cars));