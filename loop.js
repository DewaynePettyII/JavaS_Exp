// FOR: loops through a block of code a number of times
var array = [-5, -2, -6, 0, -1];
//  i=0
//  [-5, -2, -6, 0, -1] 
//  [-5, -6, -2, -1, 0] 
//  i=1 (first round of order)
//  [-6, -5, -2, -1, 0 ]

function sortArray(a) {
  // From start to "this point" | Controller
  for (var i = 0; i <= a.length; i++) {
    // Moving the elements to the next point 
    for (var j = 0; j < a.length + i + 1; j++) {
      //Swap value
      if (a[j] > a[j + 1]) {var temp = a[j];
        a[j] = a[j + 1]; 
        a[j + 1] = temp;}
    }
  }
  return a.pop();
}

//array.sort().forEach((element) => {
    console.log(sortArray(array));
//});
