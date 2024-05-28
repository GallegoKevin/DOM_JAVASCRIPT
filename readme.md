# DOM

![imagen](https://i.ytimg.com/vi/5fb2aPlgoys/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDbToKjzSd2KI14E9YqLrRGt4KIWw)

## getElement:  
Métodos para seleccionar elementos del DOM.

 - `getElementById:` Nos permite seleccionar un elemento del DOM utilizando su ID.
 - `querySelector:` Nos permite seleccionar el primer elemento que coincide con un selector.
 - `querySelectorAll:` Nos permite seleccionar todos los elementos que coinciden con un selector.

## modifiedElement: 
Métodos para modificar el contenido de los elementos del DOM.

- `textContent:` Nos permite modificar el texto de un elemento.
- `innerHTML:` Nos modificar el contenido HTML interno de un elemento, lo que incluye etiquetas HTML y su contenido

## styles: 
Métodos para modificar los estilos de los elementos del DOM.

- `property style:`  Modificar los estilos inline del elemento directamente.
- `property classList.add:` Nos permite agregar uno o más clases CSS a un elemento.
- `property classList.remove:` Nos permite quitar una o más clases CSS de un elemento.
- `property classList.toggle:` Nos permite alternar la presencia de una clase en un elemento, agregándola si no está presente y eliminándola si está presente.

## Dom traversing: 
Métodos para navegar entre los elementos del DOM

- `parentElement:` Accede al elemento padre del elemento actual.
- `nextElementSibling:` Accede al siguiente hermano del elemento actual
- `children:` Devuelve una colección de los elementos secundarios de un elemento dado

# Create element: 
Métodos para crear y agregar nuevos elementos al DOM

- `createElement:`  Crea un nuevo elemento HTML especificado por su etiqueta.
- `appendChild:` Agrega un nodo como el último hijo de un nodo padre especificado.