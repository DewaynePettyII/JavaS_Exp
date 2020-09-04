var a = 'a'
let foo = 42
var boolean = true
function add (a, b){
    return a+b
}
var obj = {firstName: 'Jake', lastName: 'Curtan', age: 27}
console.log (' this is a ', typeof a )
console.log (' this is foo ', typeof foo )
console.log (' this is boolean ', typeof boolean )
console.log (' this is obj ', typeof obj )
console.log (' this is function ', typeof add )

function isString (obj){
    if (typeof obj == 'string')
    return true
    else return false
}
console.log (isString(obj))

function compareObjects (obj1, obj2){
    if (typeof obj1 == 'object' && typeof obj2 == 'object')
    return 'they are the same'
    else return 'they are not the same'
}
console.log (compareObjects(obj, obj))