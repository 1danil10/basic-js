const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(sampleActivity) {
  let regex = /^[-+]?[0-9]*[.]?[0-9]+$/;
  if (regex.test(sampleActivity)) return false;
  let value = Number(sampleActivity);
  value;
  if (value <= 0 || value > 15) return false;
  let num =
    Math.log(MODERN_ACTIVITY / value) / (Math.log(2) / HALF_LIFE_PERIOD);
  console.log(Math.ceil(num));
  return Math.ceil(num);
}

console.log(dateSample("1.34")); // 13305
