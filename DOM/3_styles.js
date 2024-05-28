
// styles:
//  Métodos para modificar los estilos de los elementos del DOM


// Style: Modificar directamente el estilo del elemento
title.style.backgroundColor = 'red';

// classList.add:: Agregar una o mas clases CSS al elemento.
title.classList.add('card', 'card-red');

// classList.remove: Quitar una o mas clases CSS del elemento.
title.classList.remove('card');

// classList.toggle: Alternar clases CSS en el elemento (agrega si no está, remueve si está)
title.classList.toggle('prueba');


// Diferencias:

// - style: Modifica directamente los estilos inline del elemento.
// - classList.add: Agrega una o más clases al elemento.
// - classList.remove: Quita una o más clases del elemento.
// - classList.toggle: Alterna la presencia de una clase en el elemento.
