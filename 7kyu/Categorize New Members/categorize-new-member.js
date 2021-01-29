function openOrSenior(data) {
  const results = [];

  data.forEach((person) => {
    const age = person[0];
    const handicap = person[1];

    if (age >= 55 && handicap > 7) {
      results.push('Senior');
    } else {
      results.push('Open');
    }
  });

  return results;
}
