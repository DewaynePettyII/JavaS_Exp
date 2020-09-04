console.log ([10]===[10]);
//Though they may be identical, they're not the same based of the laws of deepEquals
var oldArray = []
var object = {}

object.newArray = oldArray
oldArray.push (10)
console.log (object.newArray===oldArray)