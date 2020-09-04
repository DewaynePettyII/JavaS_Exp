var str = "hello world";
// var first = str.charAt(1)
// console.log(first)

//Put Hello World into an array usuing charAt
// var array = ['hello world']
//  array.push(first)
//  console.log(array[0])
function stringIntoArray(str) {
  var text = str;
  var array = [];
  for (let i = 0; i <= text.length - 1; i++) {
    array.push(text.charAt(i));
  }
  return array;
}
var arrayToPrint = stringIntoArray(str);
arrayToPrint.forEach((element) => console.log(element));
