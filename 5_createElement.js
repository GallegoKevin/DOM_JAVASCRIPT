

// createElement: 
//Métodos para crear y agregar nuevos elementos al DOM

// Crear un nuevo elemento
const element = document.createElement('p');
const container = document.getElementById('container');

// Agregar contenido al nuevo elemento
element.textContent = "soy un parrafo creado mediante JS";

// Agregar atributos (opcional)
element.classList.add('firstClass', 'secondClass');
element.setAttribute('id', 'firstID');

// Renderizar el nuevo elemento en el DOM
container.appendChild(element);

// Diferencias:
// - createElement: crea un nuevo elemento.
// - textContent: agrega texto al nuevo elemento.
// - classList.add y setAttribute: agrega clases y atributos al nuevo elemento.
// - appendChild: agrega el nuevo elemento como hijo del contenedor.
