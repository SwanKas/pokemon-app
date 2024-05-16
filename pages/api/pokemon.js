// pages/api/pokemon.js
export default async (req, res) => {
  const maxPokemon = 1302;
  const randomId = Math.floor(Math.random() * maxPokemon) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();

  res.status(200).json(data);
};