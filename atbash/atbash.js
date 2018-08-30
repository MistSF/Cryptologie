atbash = (data) => {
  let valret = '';
  let key = 0;
  let dif = 0;

  for (let i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    if (char >= 65 && char <= 90){
      key = char - 65;
      dif = 65;
    }
    else if (char >= 97 && char <= 122){
      key = char - 97;
      dif = 97;
    }
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      valret += String.fromCharCode(26 - 1 - key + dif);
    } else {
      valret += String.fromCharCode(char);
    }
  }

  return valret;
};
