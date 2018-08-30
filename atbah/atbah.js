atbah = (data) => {
  let tab = [
    "I", "H", "G", "F",
    "N",
    "D", "C", "B", "A",
    "R", "Q", "P", "O",
    "E",
    "M", "L", "K", "J",
    "Z", "Y", "X", "W",
    "V", "U", "T", "S"
  ]

  let valret = '';
  let char = '';

  for (let i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      char -= 65;
    } else if (char >= 97 && char <= 122) {
      char -= 97;
    }
    valret += tab[char];
  }
  return valret;
}
