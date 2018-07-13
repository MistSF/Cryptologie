tritheme = (data) => {
  let valret = '';
  let char = 0;
  let key = 0;
  let min = false;

  for (let i = 0; i < data.length; i++) {
    min = false;
    char = data.charCodeAt(i);

    if (char >= 97 && char <= 122)
      min = true;

    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      char += key;
      key++;
      if ((!min && char > 90) || (min && char > 122))
        char -= 26;
    }

    if (key > 25) {
      key = 0;
    }
    valret += String.fromCharCode(char);
  }
  return valret;
}
