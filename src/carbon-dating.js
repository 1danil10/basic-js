const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    !/^[-+]?[0-9]*[.]?[0-9]+$/.test(sampleActivity)
  )
    return false;
  let value = Number(sampleActivity);
  if (value <= 0 || value > 15) return false;
  let num = Math.ceil(
    Math.log(MODERN_ACTIVITY / value) / (Math.log(2) / HALF_LIFE_PERIOD),
  );
  return num;
};
