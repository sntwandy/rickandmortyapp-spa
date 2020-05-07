const resolveRoutes = (route) => {
    if (route.length <= 3) { // Si estamos accediendo a una id menor o igual a tres, entonces entra en el flujo.
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; // En caso de que no sea '/' o un '/:id', significa que esta accediendo a otra ruta como '/about', '/contact'.
}

export default resolveRoutes;