function inverse(a, b, c, d) {
    let det = a*d-b*c
    if (det === 0) return ['Invalide', []]
    
    let matrice = [
      [d*(1/det), -b*(1/det)],
      [-c*(1/det), a*(1/det)]
    ]
  
    return ['Valide', matrice]
  }
  
console.log(inverse(1, 2, 3, 4)) // => [ 'Valide', [ [ -2, 1 ], [ 1.5, -0.5 ] ] ]
console.log(inverse(1, 4, 0.5, 2)) // => [ 'Invalide', [] ]

let matrice = [[1, 2], [3, 4]]
console.log(inverse(...[...matrice[0], ...matrice[1]]))