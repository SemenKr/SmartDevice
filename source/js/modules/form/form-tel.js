
const prefixNumber = (str) => {
  if (str === '7') {
    return '7 (';
  }
  if (str === '9') {
    return '7 (9';
  }
  return '7 (';
};

// ======================================

const getTelMask = (elem) => {
  elem.addEventListener('input', () => {
    const value = elem.value.replace(/\D+/g, '');
    const numberLength = 11;

    let result;
    if (elem.value.includes('+8') || elem.value[0] === '+7') {
      result = '';
    } else {
      result = '+';
    }

    //
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ') ';
          break;
        case 7:
          result += '-';
          break;
        case 9:
          result += '-';
          break;
        default:
          break;
      }
      result += value[i];
    }
    //
    elem.value = result;
  });

};

export {getTelMask};
