const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("THROWN");
  }
  let result = [...arr];
  result.forEach((item, index, arr) => {
    if (item == "--discard-next" && index < arr.length - 1) {
      arr.splice(index, 2);
    } else if (item == "--discard-prev" && index > 1) {
      arr.splice(index - 1, 2);
    } else if (item == "--double-next" && index < arr.length - 1) {
      arr[index] = arr[index + 1];
    } else if (item == "--double-prev" && index > 1) {
      arr[index] = arr[index - 1];
    }
  });

  return result.filter(
    (item) => !/^--\w*-(prev|next)$/.test(item) || item == false,
  );
};
