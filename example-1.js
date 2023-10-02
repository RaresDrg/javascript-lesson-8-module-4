/*Example 1 - Map method

Let the `getModels` function return an array of models (model field) of all cars.
*/

import { cars } from "./carsData.js";
import { users } from "./usersData.js";  // *adaugat doar pentru exemplu var.complexa //

/*
  ^Varianta complexa (repetitva):

^ -folosita pentru operatii repetitive (cu alti parametrii, primitii din diferite apelarii).
^ -variabila primeste ca valoare, o functie, ce are drept parametru, argumentul transmis
^ -corpul acestei functii este reprezentat de o metoda (rezultatul metodei)

^ -se apeleaza variabila respectiva, cu argumentul ce va fi trimis ca parametru
^ -putem spune, oarecum, ca se apeleaza functia respectiva, din moment ce are parametru 

todo: folosesc "productList", ca termen general (poate reprezenta diferite produse)
*/

const getModelsWithoutReturn = (productList) => productList.map((car) => car.model);

const getModelsWithReturn = (productList) => {
  return productList.map((car) => {
    return car.model
  })
};


const getModelsLongForm = (productList) => {
  const models = productList.map((item) => {
    return item.model;
  });

  return models;
};


const getModelsWithReturnAndCondition = (productList) => {
  if (productList.length === 0) {
    return console.log(`Error, there is no data`);
  }

  return productList.map((item) => {
    return item.model;
  });
};


// console.table(getModelsWithReturn(users))      //* doar pentru testare //
console.table(getModelsWithReturn(cars));
console.table(getModelsWithoutReturn(cars));
console.table(getModelsLongForm(cars));
console.table(getModelsWithReturnAndCondition(cars));


/*
  ^Varianta simpla (nerepetitva):

  ^variabila primeste ca valoare, rezultatul functiei (metodei)
  ^se apeleaza variabila respectiva, (fara parametru, ca nu e functie)
*/

// const getModelsSimple = cars.map((car) => car.model);
// console.table(getModelsSimple);