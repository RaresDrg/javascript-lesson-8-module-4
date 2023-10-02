/*Example 3 -Filter method

Let the `filterByPrice` function return an array of cars whose price is less
than the value of the `threshold` parameter.
*/

import { cars } from "./carsData.js";
console.table(cars);


const filterByPrice = (cars, threshold) => cars.filter((car) => car.price < threshold);    
               
const filterByPriceLong = (cars, threshold) => {
  const carsFiltered = cars.filter((car) => {
    return car.price < threshold;
  });

  return carsFiltered;
};


console.table(filterByPrice(cars, 30000));
console.table(filterByPriceLong(cars, 30000));