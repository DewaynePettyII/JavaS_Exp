var twentyone = 'twenty-one'
let foo = 21
var boolean = false
function multiply (a, b){
    return a*b
}
var obj = {car: 'toyota', color: 'black', year: '1998' }
// console.log (' this is a ', typeof a )
// console.log (' this is foo ', typeof foo )
// console.log (' this is boolean ', typeof boolean )
// console.log (' this is obj ', typeof obj )
// console.log (' this is function ', typeof multiply )
function datatype (arg){
    if (typeof arg == 'string'){
        return 'string'
    }
    else if (typeof arg == 'number'){
        return 'number'
    }
    else if (typeof arg == 'object'){
        return 'object'
    }
    else if (typeof arg == 'function'){
        return 'function'
    }
    else if (typeof arg == 'boolean'){
        return 'boolean'
    }
    else if (typeof arg == 'undefined'){
        return 'undefined'
    }
} 
//console.log (datatype (undefined))

function datatype2 (arg){
    switch (typeof arg ){
        case 'string':
            return 'string'
        case 'number':
            return 'number'
        case 'boolean':
            return 'boolean'
        case 'object':
            return 'object'
        case 'function':
            return 'function'
        case 'undefined':
            return 'undefined'
        }
}
console.log (datatype2 (null))