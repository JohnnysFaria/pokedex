const baseUrl = 'https://pokeapi.co/api/v2/';

const api = {
  getPokemonList: async (offset, limit = 20) => {
    const response = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`,
    );
    const json = await response.json();
    return json;
  },
  getPokemonSpec: async (name) => {
    const response = await fetch(`${baseUrl}pokemon-species/${name}`);
    const json = await response.json();
    return json;
  },
  getPokemonDetails: async (name) => {
    try {
      const response = await fetch(`${baseUrl}pokemon/${name}`);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default api;
