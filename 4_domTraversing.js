
console.log('domTraversing:')
// domTraversing:
// Métodos para navegar entre elementos del DOM

// Seleccionar un elemento del DOM
const menuNavigation = document.querySelector('nav');

// Children: Acceder a los hijos del elemento
console.log(menuNavigation.children[0].children[1]);

// Seleccionar un elemento del DOM
const listItem = document.querySelector('nav ul li');

// parentElement: Acceder al elemento padre
console.log(listItem.parentElement.parentElement);

// Diferencias:
// - parentElement: Accede al elemento padre.
// - children: Accede a los elementos hijos.
