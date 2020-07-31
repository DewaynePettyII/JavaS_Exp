let weight = 91
if(weight<=60){
    category = 'light'
} else if(weight>60 && weight<=90){
    category = 'middle'
} else {category = 'heavy'}
console.log (category)

let array = ['a', 'b', 'c', 'd']
array.forEach(element => console.log (element))

//Adds at the end
array.push ('e')
console.log ('part 1')
array.forEach(element => console.log (element))

//Removes from the beginning
array.shift ('b')
console.log ('part 2')
array.forEach(element => console.log (element))

//
array.shift ('b')
console.log ('part 3')
array.forEach(element => console.log (element))


//Adds at the beginning
array.unshift ('a')
console.log ('part 4')
array.forEach(element => console.log (element))

//Removes from the end
array.pop ('e')
console.log ('part 5')
array.forEach(element => console.log (element))

//Adds at the end
array.push ('c')
console.log ('part 6')
array.forEach(element => console.log (element))