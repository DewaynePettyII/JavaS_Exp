function printNumber(n) {
  var i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
}
//printNumber(10);

function printEven(n) {
  var i = 0;
  do {
    if (i % 2 == 0) console.log(i);
    i++;
  } while (i <= n);
}
printEven(10);
