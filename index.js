function sumItems(array) {
  let sum = 0;
  // Sum all the numbers in the array
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += sumItems(element);
    } else {
      sum += element;
    }
  });
  return sum;
}

module.exports = sumItems;