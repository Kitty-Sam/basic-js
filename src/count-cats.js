const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mixture) {
  let countCats = 0;

  mixture.forEach(col => col.forEach( el => {
    el === '^^'
      ? countCats = countCats + 1
      : true
  } ));


  return countCats;
};