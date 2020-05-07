import router from './routes';

// Utilizamos el objeto global para saber el estado de la App
window.addEventListener('load', router);
window.addEventListener('hashchange', router);