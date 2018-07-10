fromBinary = (data) => {
  let valret = '';
  let char = 0;
  let value = 128;
  for (let i = 1; i <= data.length; i++) {
    if (data[i - 1] == '1')
      char += value;
    value /= 2;
    if (i % 8 == 0) {
      valret += String.fromCharCode(char);
      value = 128;
      char = 0;
    }
  }
  return valret;
};
