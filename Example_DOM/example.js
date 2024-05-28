// getElement
const header = document.getElementById('header');

// querySelector
const firstParagraph = document.querySelector('p');

// querySelectorAll
const allLinks = document.querySelectorAll('nav ul li a');



console.log(header);
console.log(firstParagraph);
console.log(allLinks);



// modifiedElement


header.textContent = 'Modificado: DOM con JavaScript';
firstParagraph.innerHTML = 'Este es un <strong>párrafo</strong> modificado mediante JavaScript.';


// styles


firstParagraph.style.color = 'red';


allLinks[0].classList.add('highlight');

allLinks[1].classList.add('active');
allLinks[1].classList.remove('active');

allLinks[2].classList.toggle('inactive');


// domTraversing


const navigation = document.querySelector('nav');

//Children: Acceder a los hijos del elemento

console.log(navigation.children[0].children[2]);

const navItem = document.querySelector('nav ul li');

// parentElement: Acceder al elemento padre

console.log(navItem.parentElement.parentElement);

// nextElementSibling: Acceder al siguiente hermano del element
console.log(navItem.nextElementSibling);



// createElement


const newParagraph = document.createElement('p');
const body = document.body;

// Agregar contenido al nuevo elemento
newParagraph.textContent = "Este es un nuevo párrafo creado dinámicamente con JavaScript.";

// Agregar clases y atributos al nuevo elemento
newParagraph.classList.add('thirdClass');
newParagraph.setAttribute('id', 'info');

// Renderizar el nuevo elemento 
body.appendChild(newParagraph);


