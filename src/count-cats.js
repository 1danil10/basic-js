const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((item) =>
    item.forEach((innerItem) => {
      if (innerItem == "^^") {
        count++;
        return;
      }
    }),
  );
  return count;
};
