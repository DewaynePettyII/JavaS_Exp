//Create an array, print the length
let fruits=['Apple','Banana','Orange','Kiwi'] 
console.log(fruits.length)

//Access an array item using the index position
let first=fruits[0]
console.log(first)
let last=fruits[fruits.length-1]
console.log(last)

//Loop over an array
fruits.forEach(function(item, index, array){
    console.log(item, index)
})

//Looping over over an array
fruits.forEach(element => console.log(element))

//Looping over an array using for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
//Looping over an array backwards
for(let i=fruits.length-1; i>=0; i--){
    console.log("-----")
    console.log(fruits[i])
}
for(let i=0; i<fruits.length; i=i+2){
    console.log(fruits[i])
}

//Add an element to the end of the array
let newlength = fruits.push('Strawberry')
console.log(newlength)


fruits.forEach(element => console.log(element))

//Remove an element from the end of the array
let last2 = fruits.pop()
console.log('this was the last element:', last2)

fruits.forEach(element => console.log(element))

//Remove an element from the beginning of the array
let first2 = fruits.shift()
console.log('this was the first element', first2)

fruits.forEach(element => console.log(element))

//Add and element to the beginning of the array
let newlength2 = fruits.unshift('Watermelon')
console.log(newlength2)

fruits.forEach(element => console.log(element))

fruits.push('Mango')
fruits.forEach(element => console.log(element))

//Find the index of an item on the array
let position = fruits.indexOf('Banana')
console.log (position)
fruits.forEach(element => console.log(element))

let removedItem = fruits.slice(0, 2)
fruits.forEach(element => console.log(element))
console.log (removedItem)

