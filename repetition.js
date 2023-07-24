var numbers = [1,2,3,4,5]
console.log(numbers)

const fruits = ["apple", "grapes", "strawberry", "raspberry", "blackberry"]
console.log(fruits)
var fruit
for (let i = 0; i < fruits.length; i++) {
    fruit = fruits[i];
    console.log(fruit)
    if (fruits[1] == fruit){
        console.log(fruit)    
    }  
}
const nomes = ["John", "Kelly", "Lina", "Mike", "Janice", "Kyle"]
console.log(nomes)
var nome;
/*for (let i = 0; i< nomes.length; i++) {
    nome = nomes[i]
    console.log(nome)
}*/

let i = 0
while(i< nomes.length) {
    
    console.log(nomes[i]) 
    i++
}
const cardapio = ["sarapatel", "buchada de bode", "carne de sol", "pudim"]
let indice = 0
console.log("restaurante da Mary") 
do{
    console.log(cardapio[indice]) 
    indice++
} while(indice < cardapio.length)