cesar = (data, key) => {

  let valret = '';
  let char = '';

  for (let i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      char = data.charCodeAt(i) + key;
      if (char > 90) {
        char -= 26;
      }
      else if (char < 65) {
        char += 26;
      }
    } else if (char >= 97 && char <= 122) {
      char = data.charCodeAt(i) + key;
      if (char > 122) {
        char -= 26;
      }
      else if (char < 97) {
        char += 26;
      }
    }
    valret += String.fromCharCode(char);
  }

  return valret;
}
