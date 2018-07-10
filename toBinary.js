toBinary = (data) => {
    let valret = '';
    for (let i = 0; i < data.length; i++) {
      let char = data.charCodeAt(i);
      let value = 128;
      for (let j = 0; j < 8; j++) {
        if (char  >= value) {
          valret += '1';
          char -= value;
        }
        else
          valret += '0';
        value /= 2;
      }
    }return valret
}
