// Declaramos una URL base que es la de la API
const baseURL = 'https://rickandmortyapi.com/api';

/**
 * Función asíncrona que realiza una petición
 * a la API con el fin de traer la data de un
 * personaje en particular.
 * 
 * @param id - número de character necesitamos.
 */

const getCharater = async (id) => {
    const res = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json();

    return data;
}

/**
 * Función asíncrona que realiza una petición
 * a la API con el fin de traer la página 
 * de personajes solicitada.
 * 
 * @param page - # de página.
 */

const getCharacters = async (page) => {
    const res = await fetch(`${baseURL}/character/?page=${page}`);
    const data = await res.json();

    return data;
}


export { getCharater, getCharacters }; 