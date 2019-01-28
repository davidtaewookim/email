const toString = (obj, separator) => {
  const defaultSeparator = separator || ',';
  let convertedString = '';

  if (obj === null) {
    return null;
  }

  switch (typeof obj) {
    case 'string':
      convertedString = obj;
      break;
    case 'object':
      if (Array.isArray(obj)) {
        convertedString = obj.join(defaultSeparator);
        break;
      }
      return null;
    case 'undefined':
      return null;
    default:
      return null;
  }
  return convertedString;
};

const toObjectArray = (obj, key = 'email', separator = ',') => {
  let arrayOfStrings = [];

  if (obj === null) {
    return null;
  }

  switch (typeof obj) {
    case 'string':
      arrayOfStrings = obj.split(separator);
      break;
    case 'object':
      if (Array.isArray(obj)) {
        arrayOfStrings = obj;
        break;
      }
      return null;
    case 'undefined':
      return null;
    default:
      return null;
  }
  const result = arrayOfStrings.map(e => ({ [key]: e }));

  return result;
};

module.exports = { toString, toObjectArray };
