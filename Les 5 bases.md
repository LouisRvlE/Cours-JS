# JavaScript Vanilla
## Les 5 bases de l'algorithmie, appliquées au JS

### Sommaire
1) [Les variables](#1-les-variables) <br>
  a. [Assigniations des variables](#assigniations-des-variables) <br>
  b. [Les chiffres](#b-les-chiffres) <br>
  c. [Les booléens](#c-les-booléens) <br>
  d. [Les listes](#d-les-listes) <br>
  e. [Les dictionnaires](#e-les-dictionnaires) <br>
  f. [Les données nulles](#f-les-données-nulles) <br>
2) [Les conditions ](#2-les-conditions) <br>
3) [La lecture et l'écriture](#3-la-lecture-et-lécriture) <br>
  [La lecture](#la-lecture) <br>
  [L'écriture](#lécriture) <br>
4) [Les boucles](#4-les-boucles) <br>
5) [Les fonctions](#5-les-fonctions) <br>

Clique sur le bouton ▲ pour revenir au sommaire.

### 1. Les variables
[▲](#sommaire)


#### Assigniations des variables

Pour créer une variable, il faut l'instancier avec une des trois instructions : ``var``, ``let`` ou ``const``.
```js
var variableGlobale = 'exemple';
let variableCourante = 'exemple';
const constanteGlobale = 'exemple';
```

Pour modifier une variable, il ne faut pas réécrire cette instruction :
```js
let exemple = 'Variable Super Chouette'
console.log(exemple) // = Variable Super Chouette
exemple = 'Variable beaucoup moins chouette'
console.log(exemple) // Variable beaucoup moins chouette
```

Ces trois instructions n'existent pas pour rien, il y a bien évidement des différences :
L'instruction ``let`` permet de déclarer une variable dont la portée est celle du bloc courant. L'instruction ``var`` correspond à une variable globale, qui ne peut être ré-assginée. La variable pourra cependant être modifiée, contrairement à une constante, avec l'instruction ``const``, qui est immuable.

Exemple pour let :
```js
let x = 1;

if (true) {
  let x = 2;
  console.log(x); // = 2
}

console.log(x); // = 1
```
``x`` a été réassginée avec l'instruction ``let``. Dans le bloc ``if``, ``x`` correspond à une autre variable que celle en dehors, c'est pour cette raison qu'à la dernière ligne, ``x`` reste inchangée.
Sans let :
```js
let x = 1;

if (true) {
  x = 2;
  console.log(x); // = 2
}

console.log(x); // = 2
```
Dans ce cas, ``x`` n'a pas été redéfinis, donc il correspond à la même variable.

A contrario, une variable initiée avec l'instruction ``var`` ne peut pas être réassignée :
```js
var x = 1;

if (true) {
  var x = 2; // ERREUR : La variable x a déjà été assignée.
  // Le reste du code ne va pas s'effectuer.
}
```

Pour ``const``, il n'est ni possible de réassigner...
```js
const x = 1;
const x = 1; // ERREUR : x a déjà été assignée.
}
```
... ni possible de modifier la variable.
```js
const x = 1;
x = 2; // ERREUR : x est une constante.
}
```

Je déconseille fortement d'utiliser l'instruction ``var``.
Dans le cas du développemment web, l'algorithme ne s'execute pas de manière séquencielle : On ne sait pas à quelle moment l'utilisateur va faire telle ou telle action. Le code peut s'executer de manière un peu aléatoire, il est donc préférable d'utiliser des variables courantes (avec ``let``). Je reparlerai de ce concepte quand j'aborderai les fonctions.

Une variable ne doit être défini que par des caractères simple. Les lettres de a à z. Il est possible de mettre des majuscules, mais il est d'usage de commencer par une minuscule.
```js
let pommeDeTerre;
``` 
Contre-exemple : Les composants en React ont des noms qui commencent par des majuscules. 

#### a. Les chaînes de caratère

Une chaîne de caractères et simplement une suite de caractères, entourés de doubles quotes et de simple quote (``' '`` ou ``" "``).
```js
let chaine1 = 'Exemple 1'
let chaine2 = "Exemple 2"
```

Que faire si je veux utiliser une apostrophe ou des parenthèses ?
Il faut utiliser un contre-slash ``\`` :
```js
let chaine = 'Je m\'appelle professeur'
console.log(chaine) // Je m'appelle professeur
```

Il est possible de concatener plusieurs chaines de caractères :
(attention aux espaces)
```js
let chaine1 = 'Exemple 1'
let chaine2 = "Exemple 2"
let chaine3 = chaine1 + ' ' + chaine2
console.log(chaine1 + chaine2 + chaine3 + "fin")
// = Exemple 1Exemple 2Exemple 1 Exemple 2fin
```

Il n'est pas contre évidement pas possible de multiplier, soustraire ou diviser une chaine de caractères.

#### b. Les chiffres

```js
// Un entier
let chiffre = 15
// Un nombre à virgule
let chiffre2 = 12.3
// On peut faire des oppération directement dans la définition de la variable...
let chiffre3 = 10 + 5 + (1.3 * 10) - (14 / 2)
// Ou dans une modification
chiffre3 = 10 + 2
chiffre3 = chiffre3 + 2
// Il est possible de faire des opérations comme ceci :
chiffre3 += 10
chiffre3 -= 10
chiffre3 /= 10
chiffre3 *= 10
```
Il est possible de faire le même genre d'opération (uniquement l'addition) avec des chaînes de caractère :
```js
let a = 'Bonjour'
a += ' à toi'
```
Il est aussi possible d'additionner un chiffre et une chaine de caractère :
```js
let a = 'Hello' + 12 // Hello12
```

 #### c. Les booléens

Il n'existe que deux valeurs possibles pour un booléen
```js
let bool = true
let bool2 = false
```

Les opérateurs logiques (déjà vu en maths) :
``==``, ``===`` : égal
``!==``, ``!=`` : non égal
``&&`` : et, les deux doivent être vrais
``||`` : ou, un des deux au minimum doit être vrai
``<``, ``>`` : inférieur, supérieur
``<=``, ``>=`` : inférieur ou égal, supérieur ou égal


```js
let bool = true
let bool2 = false
let bool3 = 10 !== 12 // => vrai
let bool4 = bool && bool3 // => vrai
let bool5 = bool || bool2 // => vrai
let bool6 = (false && true) || (bool3 || (bool2 && true)) // => vrai
```

#### d. Les listes

Les listes sont des objets à indexage numérique, nommé plus communément array qui peuvent contenir tout type de donnée.
```js
let liste = ['Oui', 14, true, [3, 'Non', false]]
// Pour accéder à un élement de la liste, il faut référencier son index en commençant par 0
console.log(liste[0]) // = Oui
// L'élement 3 est une liste, mais elle n'agit pas comme une extension de la liste, c'est un élement en lui même
console.log(liste[3]) // = [3, 'Non', false]
console.log(liste[3][1]) // = Non
```

#### e. Les dictionnaires

Les dictionnaires sont comme les listes, mais leur indexage est libre : ce peut être une chaîne de caractère, un chiffre, ou même un booléen.
```js
// L'indexage peut être noté sans quotes quand la chaîne de caractère n'a pas de d'espace
let dict = {
    hello: 1,
    dsd: 'salut',
    2: 'skdf',
    true: "dfs",
    'salu t': {
        'coucou': 'salut'
    }
}
// Un élement peut être récupéré comme pour les listes
console.log(dict['hello']) // 1
// Attention, sans les quotes, on va ici chercher l'index qui est stocké dans la variable nommée hello
console.log(dict[hello]) // Erreur, hello n'est pas définie
// Il est donc possible de stocker un index dans une variable
let index = 'dsd'
console.log(dict[index]) // salut
```

On considère que chaque élement d'un dictionnaire est un variable héritée de cet objet.
```js
// Pour le cas des chaines de caractère, il est possible de récupérer la variable de cette manière
console.log(dict.hello)
```

Je reparlerai des élements hérités quand je parlerais des fonctions.

#### f. Les données nulles.

```js
let a = null
let b = undefined
let b2; // undefined
let c = NaN // Not a number
```

### 2. Les conditions
[▲](#sommaire)

Super partie sur les conditions à effectuer


### 3. La lecture et l'écriture
[▲](#sommaire)

#### La lecture

La lecture est l'entrée utilisateur.
Dans le cas du JavaScript Vanilla, la lecture se fait à proprement parlé dans le navigateur.
Il n'est pas nécessaire de faire une partie entière sur ce point.

#### L'écriture

L'écriture est ce qui sort de l'algorithme.
Il y a deux moyen d'écrire dans la console :
```js
console.log('Bonjour')
process.stdout.write('Bonsoir')
```

On parle depuis le début de ``console.log``, mais c'est intéressant de savoir qu'il existe un autre moyen d'écrire dans la console.
Voici un lien pour comprendre les différences entre les deux : [Difference between process.stdout.write and console.log in Node.js](https://www.geeksforgeeks.org/difference-between-process-stdout-write-and-console-log-in-node-js/)

Pour rester avec le plus courant, et celui que vous allez le plus utiliser, parlons un peu plus de ``console.log()``.
Il est possible de faire des opérations dans la fonction :
```js
console.log(12+4) // 16
```
On peut mettre plusieurs arguments :
```js
console.log('Hello', 'toi', [1, 4, 5]) // Hello toi [1, 4, 5]
```
Ils seront compris comme des élements à imprimer les un à la suite des autres dans la console, sans saut à la ligne (\n) mais avec un espace.

Voici d'autres méthodes de la console utiles à connaître :
La méthode `console.count(<label>)`.
Elle affiche le nombre de fois que la ligne a été appelée avec un label donné.
```js
console.count('Testing')
console.count('Testing')
console.count('Testing')
// Résultat avec le label Testing
/*
Testing: 1
Testing: 2
Testing: 3
*/
```

La méthode `console.table(<liste|dictionnaire>)`.
Affiche les données d'une liste ou d'un dictionnaire sous forme de tableau.
```js
console.table([['Paul', 'Marc', 'Dominique'], [19, 67, 69]])
console.table({
    Marc:{
        age:39,
        profession:'Professeur',
        list:['p', 'a', 124],
        exemple:{
            one:1,
            two:2
        }
    },
    Dominique:{
        age:52,
        profession:'Technicien',
        list:['o', 'q', 19],
        exemple:{
            one:3,
            two:4
        }
    }
})
// Résultat
/*
┌─────────┬────────┬────────┬─────────────┐
│ (index) │   0    │   1    │      2      │
├─────────┼────────┼────────┼─────────────┤
│    0    │ 'Paul' │ 'Marc' │ 'Dominique' │
│    1    │   19   │   67   │     69      │
└─────────┴────────┴────────┴─────────────┘
┌───────────┬─────┬──────────────┬───────────────────┬────────────────────┐
│  (index)  │ age │  profession  │       list        │      exemple       │
├───────────┼─────┼──────────────┼───────────────────┼────────────────────┤
│   Marc    │ 39  │ 'Professeur' │ [ 'p', 'a', 124 ] │ { one: 1, two: 2 } │
│ Dominique │ 52  │ 'Technicien' │ [ 'o', 'q', 19 ]  │ { one: 3, two: 4 } │
└───────────┴─────┴──────────────┴───────────────────┴────────────────────┘
*/
// Attention ! Les listes ou dictionnaires imbriquées ne s'affichent pas sous la forme d'un tableau
```

La méthode `console.group()` crée un nouveau groupe en ligne, correspondant à un nouveau niveau d'indentation.
`console.groupEnd()` referme ce groupe.
`console.groupCollapsed()` crée un groupe qiu se referme (avec un bouton pour ouvrir/fermer le bloc). Cette méthode ne fait rien dans le terminal de l'ordinateur, il ne fonctionne que dans le navigateur.
```js
console.log('1')
console.group()
console.log('2')
console.groupCollapsed()
console.log('3')
console.groupEnd()
console.log('4')
console.groupEnd()
console.log('5')
// Résultat
/*
1
  2
    3
  4
5
*/
```

Et une dernière méthode, celle-ci utilisé pour connaitre l'efficatité du code.
La méthode `console.time(<label>)` démarre un nouveau chronomètre, qui d'arrêtera avec la méthode `console.timeEnd(<label>)`.
```js
console.time('Timeur')
let cpt = 13*32
cpt -= 12
cpt *= 13
cpt += 12
console.log(cpt)
console.timeEnd('Timeur')
// Résultat avec le label Timeur
/*
5264
Timeur: 13.44ms
*/
```

Pour voir toutes les méthodes inhérentes à la console, n'hésiter pas à consulter [la documentation](https://developer.mozilla.org/fr/docs/Web/API/Console)


### 4. Les boucles
[▲](#sommaire)

Il existe deux type de boucle :
Les boucles Tant que, et les boucles Pour.

Petit exemple pour comprendre la différence :
Si un politique dit "**Pour** 150 Millions de chomeurs, je vais créer 150 Millions d'emplois". La limite est bien définie, c'est comme une boucle qui va s'effectuer 150 Millions de fois, et qui va à chaque fois créer un emplois. La boucle à une fin.
Si un politique dit "**Tant** qu'il y aura des chomeurs, je vais créer des emplois". La boucle peut s'effectuer à l'infini, car la limite n'est pas définie.

Les boucles Tant que :
```js
while (/*condition*/) {
  // Code de la boucle
}

while (true) {
  console.log('Bonjour')
}
// Résultat
/*
Bonjour
Bonjour
Bonjour
...
Jusqu'à l'infini, car true ne changera jamais
*/
let i = 5;
let j = 2;
// Tant que j est supérieur à 0
while (j > 0) {
  if (i > j) {
    i -= j
  } else {
    j -= i
  }
  console.log('i : ${i}\nj : ${j}\n')
}
// Résultat
/*
i : 3
j : 2

i : 1
j : 2

i : 1
j : 1

i : 1
j : 0
*/
// j n'est plus supérieur à 0
```

Les boucles Pour
```js
for (/*'variable de départ'*/; /*'condition de fonctionnement'*/; /*'expression de fin de boucle'*/) {
  // Code de la boucle
}
// Pour...
// i est la variable de départ
// Il faut que i soit inférieur à 5
// On incrémente i à la fin de la boucle
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// Résultat :
/*
0
1
2
3
4
*/
```

J'ai pas finis

### 5. Les fonctions
[▲](#sommaire)