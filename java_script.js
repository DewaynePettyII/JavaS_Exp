//Create an array, print the length
let fruits=['Apple','Banana','Orange','kiwi'] 
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