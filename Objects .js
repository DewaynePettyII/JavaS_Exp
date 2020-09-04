// JavaScript objects
//var car = 'Toyota'
//-----
//Decloration
var car = { type: "Toyota", model: "100", color: "Blue" };
console.log(car.type);
console.log(car.color);
// 2nd Way
car["type"];
console.log(car["type"]);
//-----
// For/In Loop
var person = { name: "Alex", last: "Pikman", age: "23" };
var x;
for (x in person) {
  console.log(person[x]);
}
