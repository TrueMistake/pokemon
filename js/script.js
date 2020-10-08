const container = document.querySelector('.pokemons');
const pokemon_number = 50;

const fetchPokemon = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(res => {
          pokemonItem(res);
      });
};

const pokemonItem = async item => {
    const box = `
        <div class="pokemon-item">
            <div class="pokemon-item__wrap">
                <img src="${item.sprites.front_default}" alt="" class="pokemon-item__img">
                <div class="pokemon-item__id">#${item.id}</div>
                <div class="pokemon-item__name">${item.name}</div>
                <div class="pokemon-item__type">Type: <span>${item.types[0].type.name}</span></div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend',box);
};


fetchPokemon();
































