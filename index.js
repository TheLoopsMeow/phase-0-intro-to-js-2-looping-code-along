function writeCards (array, evenement) {
  const anotherArray = [];

  for (let i = 0; i < array.length; i++) {
      anotherArray[i] = `Thank you, ${array[i]}, for the wonderful ${evenement} gift!`
  }
return anotherArray;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown (integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}

countDown(10);