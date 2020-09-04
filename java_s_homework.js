function myProduct (p1, p2){
    return p1*p2
}
var p1 = -9
var p2 = 3
console.log (myProduct (p1, p2))

function modulus (p1, p2){
    return p1%p2
}
var p1 = 17
var p2 = 5
console.log (modulus (p1, p2))

function division (p1, p2){
    return p1/p2
}
var p1 = 5
var p2 = 10
console.log (division (p1, p2))

var p1 = 4
var p2 = 4
function equalTo(n1, n2){
    if (n1==n2) 
    console.log ('True')
    else if (n1>n2)
    console.log (n1+' false '+n2)
    else 
    console.log (n1+' false '+n2)
}
equalTo (p1, p2)

var p1 = 3
var p2 = 2
function notEqual (n1, n2){
    if (n1!=n2) 
    console.log ('True')
    else if (n1!=n2)
    console.log (n1+' false '+n2)
}
notEqual (p1, p2)

var p1 = 7
var p2 = 8
function lessThan (n1, n2){
    if (n1<=n2) 
    console.log ('True')
    else if (n1>n2)
    console.log (n1+' false '+n2)
}
 lessThan (p1, p2)

 // “value is “ + 50 / % 17

 function sum (n){
     var accumulator = 0
     for (var i = 0; i <= n; i++){
        accumulator = accumulator + i
     } 
     console.log (' The sum of 0 throught ' +n+ ' is ' +accumulator)
 }
 sum (2)
 sum (5)
 sum (3)
 sum (6)

 function isValid (n){
     if (n >= 0 && n <= 100)
     return true
     else 
     return false
 } 
if (isValid (102)){
    console.log (' true ') 
} else{
    console.log (' false ')
}

function isPair (n){
    if (n % 2 == 0)
    console.log (n + ' isPair ')
    else 
    console.log (n + ' isNotPair ')
}
isPair (2)
isPair (10)
isPair (4)
isPair (12)
isPair (5)
isPair (13)

function printNumber (n){
for (var i = 0; i <= n; i++){   
    console.log (i);
}
}
printNumber(10)

function primtNumberReverse (n){
    
}
for( var a = 10; a >= 1; a--){
    console.log (a)
}

var a = 1
for ( a = 1; a <= 10; a++){
    if (a%2==0){
console.log (a);
}
}
