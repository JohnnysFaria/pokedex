const baseUrl = 'https://pokeapi.co/api/v2/';

const api = {
  getPokemonList: async (offset, limit = 20) => {
    const response = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`,
    );
    const json = await response.json();
    return json;
  },
};

export default api;
