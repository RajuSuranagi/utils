/**
* Pass an excel column name and get an index in return
* ex: 'AA' -> 27, 'BZ' -> 78 so on upto 'ZZ'
*/
const charCodeOfA = 65;
const getIndex = (string) => {
  string = string.toUpperCase();
  if (string.length > 2) {
    console.log('No support for: ', string);
    return;
  }

  if (string.length === 1) {
    return string.charCodeAt(0) - (charCodeOfA - 1);
  }

  const multiplyBy = (string.charCodeAt(0) - (charCodeOfA - 1));
  console.log('multiplyBy:', multiplyBy);
  const wholeIndex = 26 * multiplyBy;
  const result = wholeIndex + (string.charCodeAt(1) - (charCodeOfA - 1));
  
  console.log(result);
  return result;
};
