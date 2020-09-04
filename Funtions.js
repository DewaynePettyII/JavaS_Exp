function myFunction (p1, p2){
    return p1+p2
}
var p1 = 2
var p2 = 6
console.log (myFunction (p1, p2))

function product (p1, p2){
    return p1*p2
}
console.log (product (p1, p2))

function division (p1, p2){
    return p2/p1
}
console.log (division (p1, p2))

function toCelcius (fahrenheit){
    return (5/9)*(fahrenheit-32)
}
console.log (toCelcius (77))

function compareNumbers(n1, n2){
    if (n1==n2) 
    console.log ('these two numbers are equal')
    else if (n1>n2)
    console.log (n1+' is greater than '+n2)
    else 
    console.log (n1+' is less than '+n2)
}
compareNumbers (p2, p2)

var array = [5, 7] 
function printArray (array){
    for (var i = 0; i<array.length; i++)
    console.log (array[i])
}
printArray (array)