albam = (data) => {

  let char = 0;
  let valret = '';

  for (let i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    if ((char >= 65 && char <= 77) || (char >= 97 && char <= 109)) {
      char += 13;
    } else if ((char >= 78 && char <= 90) || (char >= 109 && char <= 122)) {
      char -= 13;
    }
    valret += String.fromCharCode(char);
  }

  return valret;

}
