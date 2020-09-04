//
var array = [3, 6, 2, 5]
var largest = 0
function getLargestNumber (array){
    for (var i = 0; i < array.length; i++){
        if (largest < array [i]){
            largest = array [i] 
        }
    }
    return largest
}
 console.log (getLargestNumber (array))

function getSmallestNumber (array){
    var smallest = array[0]
    for (var i = 0; i < array.length; i++){
        if (smallest > array [i]){
            smallest = array [i]
        }
    }
    return smallest
}
console.log (getSmallestNumber (array))