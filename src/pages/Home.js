import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData(); // Hacemos nuestra peticion a la API y renderizamos todos los personajes, e iteramos en cada uno y lo renderizamos con su plantilla mediante 'map'
    const view = `
    <div class="articles-container">
        ${characters.results.map(character => `
            <article class="card-container">
                <a href="#/${character.id}/">
                    <figure class="card-image-container">
                        <img class="" src="${character.image}" alt="${character.name}" />
                    </figure>
                <div class="card-name-container">
                    <h3 class="card-name-title">${character.name}</h3>
                </div>
                </a>
            </article>
        `).join('')}
    </div>
    `;
    return view;
}

export default Home;