export function generateRandom(min, max, exclude) {
  const rnd = Math.floor(Math.random() * (max - min)) + min;

  if (rnd === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rnd;
  }
}
