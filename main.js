/*Opérateur conditionnel */
let dict = [
    [0, 9],
    [19, 24],
    [19, 39, [24, 19]]
]
let obj1 = dict[2] // [19, 39, [24, 19]]
let obj2 = obj1[0] // 19
let obj3 = obj2[2] // undefined
let obj4 = obj3[1] // Renvoie une erreur :
// Cannot read properties of undefined (reading '1')

let obj4Fixed = obj3?.[1] // Grâce à l'oprateur 
console.log(obj1)
console.log(obj2)
console.log(obj3)
// console.log(obj4)