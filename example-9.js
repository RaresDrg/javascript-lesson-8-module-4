/*Example 9 - Sort method

Let the `sortByModel` function return a new array of cars sorted
by model name in alphabetical and reverse alphabetical order, depending on
the value of the `order` parameter.
*/

import { cars } from "./carsData.js";
console.table(cars);

const sortByModel = ([...cars], order) => {
  const carsSortedByModel = cars.sort((a, b) => {
    if (order === "asc") {
      return a.model.localeCompare(b.model)
    };

    if (order === "desc") {
      return b.model.localeCompare(a.model);
    };
  });

  return carsSortedByModel
};

console.table(sortByModel(cars, "asc"));
console.table(sortByModel(cars, "desc"));