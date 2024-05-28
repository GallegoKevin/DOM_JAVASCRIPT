
console.log('getElement:');
// getElement: 
// Métodos para seleccionar elementos del DOM .

// getElementById: Escoge un elemento por su atributo ID
const title = document.getElementById('title');

// querySelector: Escoge el primer elemento que coincide con el selector CSS

const subtitle = document.querySelector('#subtitle');

// querySelectorAll: Escoge todos los elementos que coinciden con el selector CSS
const menu = document.querySelectorAll('nav ul li a');

// Diferencias:
// - getElementById: Solo escoge un elemento por su ID.
// - querySelector: Escoge el primer elemento que coincide con el selector CSS.
// - querySelectorAll: Escoge todos los elementos que coinciden con el selector CSS.

console.log(title);
console.log(subtitle);
console.log(menu);
