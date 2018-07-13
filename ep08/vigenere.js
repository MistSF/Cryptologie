vigenere = (data, key) => {
  let valret = '';
  let char = 0;
  let codeKey = 0;
  let posKey = 0;
  let min = false;

  for (let i = 0; i < data.length; i++) {

    char = data.charCodeAt(i);
    codeKey = (key.charCodeAt(posKey));

    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      if (char < 90)
        min = false;
      else
        min = true;

      if (codeKey >= 65 && codeKey <= 90)
        codeKey -= 65;
      else if (codeKey >= 97 && char <= 122)
        codeKey -= 97;

      char += codeKey;
      if ((char > 122 && min) || (char > 90 && !min))
       char -= 26;

      posKey++;
      if (posKey >= key.length)
        posKey = 0;
    }
    valret += String.fromCharCode(char);
  }
  return valret;
}
