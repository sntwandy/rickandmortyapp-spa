const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API; // Identificamos hacia donde se esta moviendo el usuario, si tenemos un id lo concatenamos al la API de lo contrario traemos todos los characters

    try {
        const response = await fetch(apiURL); // Hacemos la peticion a la API
        const data = await response.json(); // Parseamos los datos a '.json' para poder iterar entre los datos.
        return data; // Retornamos los datos iterables en formato .json
    }
    catch (error) { // En caso de error retornamos el error.
        console.log(`Fetch error: ${error}`);
    }
}

export default getData;