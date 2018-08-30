polybe = (data) => {
  const tab = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'X', 'Y', 'Z']];

  let valret = '';

  for (let i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    if (char == 87)
      char--;
    if (char >= 97 && char <= 122)
      char -= 32;
    if (char >= 65 && char <= 90) {
      tab.forEach((r, i) => {
        r.forEach((r2, j) => {
          if (r2 == String.fromCharCode(char))
            valret += `${i}${j}`;
        })
      });
    }
  }
  console.log(valret);
};
