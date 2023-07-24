// Exemplo usando 'let'
let x = 10;
let age = 33
if (x > 5) {
  let y = 20;
  let nome = "Sidney"
  console.log(x, age, y);  // Output: 10, 20
}
console.log(x);    // Erro: y is not defined (y não está definido)

// Exemplo usando 'var'
var a = 10;
if (a > 5) {
  var b = 20;
  var nome = "Sid"
  console.log(a, b);  // Output: 10, 20
}
console.log(a, b, nome);    // Output: 10, 20 (b está acessível fora do bloco if)

// Exemplo usando 'const'
const p = 10;
if (p > 5) {
  const q = 20;
  const p = 5;
  console.log(p, q);  // Output: 10, 20
}
console.log(p, q);    // Erro: q is not defined (q não está definido)