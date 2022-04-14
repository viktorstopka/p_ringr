const Lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const Closest = (array: number[], value: number) => {
  let minDiff = Infinity;
  let closest = 0;
  for (let i = 0; i < array.length; i++) {
    const diff = Math.abs(array[i] - value);
    if (diff < minDiff) {
      minDiff = diff;
      closest = i;
    }
  }
  return closest;
};

const Clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

//Map value from a range to another
const Map = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) => {
  return toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin);
};

const Math2 = { Lerp, Closest, Clamp, Map };
export default Math2;
