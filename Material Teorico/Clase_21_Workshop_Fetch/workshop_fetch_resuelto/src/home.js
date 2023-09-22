/* Aquí necesitamos traer todos los personajes, por eso
 * importamos nuestra función getCharacters
 */
import { getCharacters } from "./services/getData.js";

/**
 * Tomamos el main container de nuestro Home
 */

const container = document.querySelector('#characters');
const loader = document.getElementById('lds-ring');

/**
 * Llama a la lista de personajes, recorre el objeto y crea
 * una estructura HTML por cada uno, luego los inyecta
 * de a uno en el container.
 */

const charactersList = async (page = 1) => { // por defecto le pasamos el page 1 por si no lo recibe
    
    // mostramos el loader
    loader.style.display = 'grid';

    // pedimos los personajes
    const { results } = await getCharacters(page);

    // ocultamos el loader
    loader.style.display = 'none';
    
    results.forEach(character => {
        const article = document.createElement('article');
        article.setAttribute('class', 'character');
        article.innerHTML = `
                <img src="${character.image}" alt="">
                <h2>${character.name}</h2>
                <div>
                    <p>${character.species}</p>
                    <p class="${character.status.toLowerCase()}"></p>
                </div>
                <a href="/#/${character.id}">Ver detalle
                </a>
        `;
       container.appendChild(article);
    });
}

/**
 * Invocamos nuestra función principal
 */
charactersList();

/**
 * Cuando la URL cambie al presionar el enlace
 * de un personaje, el navegador reconoce el evento
 * y guarda el ID de ese personaje en el localStorage
 * para ser tomado por el archivo de details.js
 */

window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    localStorage.setItem('charID', id);
    window.location.replace('/character.html');
});


