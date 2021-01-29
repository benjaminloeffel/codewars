function arrayDiff(a, b) {
  return a.filter((currentValue) => {
    return !b.includes(currentValue);
  });
}
