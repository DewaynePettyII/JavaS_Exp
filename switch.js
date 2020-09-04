var day = new Date ().getDay()
var result 
switch (day){
    case 0: 
    result = 'sunday'
    break
    case 1: 
    result = 'monday'
    break
    case 2:
    result = 'tuesday'
    break
    case 3:
    result = 'wednesday'
    break
    case 4: 
    result = 'thursday'
    break
    case 5:
    result = 'friday'
    break
    case 6:
    result = 'saturday'
    break
}
console.log (result)