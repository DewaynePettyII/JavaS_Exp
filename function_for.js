//Object Exercise
// 2! = 2*1 = 2
// 4! = 4*3*2*1 = 24
function factorial (n){
    var result = 1
    for (var i = n; i>=1; i--){
        result = result*i
    }
    return result
}
console.log (factorial (0))