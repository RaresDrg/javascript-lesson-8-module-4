/* Example 4 - Filter method

Let the `getCarsWithDiscount` function return an array of cars whose
onSale property is true.
*/

import { cars } from "./carsData.js";
console.table(cars);

const getCarsOnSale = (productList) =>         // "!item.onSale" ==> item.onSale === false //
  productList.filter((item) => item.onSale);   // "item.onSale"  ==> item.onSale === true //


const getCarsOnSaleLong = (cars) => {
  const carsOnSale = cars.filter((car) => {
    return car.onSale === true;
  });

  return carsOnSale
}


console.table(getCarsOnSale(cars));
console.table(getCarsOnSaleLong(cars));