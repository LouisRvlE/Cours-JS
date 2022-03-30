
Array.prototype.superPush = function(el) {
    this.push(el)
    return this
}
Object.prototype.sett = function(key, value) {
    this[key] = value
    return this
}
console.log([1].superPush(2)) // [ 1, 2 ]
console.log({salut:1}.sett('hello', 2)) // { salut: 1, hello: 2 }