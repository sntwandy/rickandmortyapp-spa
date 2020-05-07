import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import Footer from '../templates/Footer';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// Creamos un objeto con las rutas de las que vamos hacer render
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

// Nuestro router que va a hacer render segun la ruta
const router = async () => {
    // Identifico las partes del HTML donde puedo hacer render
    const header = null || document.getElementById('header'); // HEADER
    const content = null || document.getElementById('content'); // CONTENT
    const footer = null || document.getElementById('footer'); // FOOTER

    // Inyectamos nuestra plantilla HTML al DOM.
    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    let hash = getHash(); // Obtenemos el hash
    let route = await resolveRoutes(hash); // Comprobamos que tipo de ruta es.

    let render = routes[route] ? routes[route] : Error404; // Nuestro objeto accedemos al metodo que coincida con las rutas definidas.

    content.innerHTML = await render(); // Al final, nuestro content, se renderizara con el valor finalmente esperado.
}

export default router;