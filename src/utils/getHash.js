const getHash = () =>
    location // Accedemos al objeto location del navegador.
        .hash // Obtenemos el hash del objeto location. #/1/
            .slice(1) // Parseamos y eliminamos el primer elemento. /1/
                .toLocaleLowerCase() // Por si el usuario cambio el contenido a mayusculas, lo traemos siempre en minusculas.
                    .split('/')[1] // Con el metodo 'split' lo convertimos en un arreglo y eliminamos los '/' ['', 1, ''], y accedemos el segundo elemento con [1]
                        || '/'; // En caso de que no se encuentre a la ruta que se esta accediendo para que mande solamente el '/', esto indica que esta en la raiz del proyecto y no esta navegando en alguna seccion.

export default getHash;
// ['', 1 '']