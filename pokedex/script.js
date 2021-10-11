const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');




const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`http://localhost:5000/pokemon-informations`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pokemon: value.toLowerCase() })
        })
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())

}


const renderPokemonData = data => {
    const info = data.replies;

    pokeName.textContent = info[ordenDatos.nombre].content;
    pokeImg.setAttribute('src', info[ordenDatos.imagen].content);
    pokeId.textContent = info[ordenDatos.id].content;
    setCardColor();
    renderPokemonInfo(info[ordenDatos.info].content);
    renderPokemonTypes(info[ordenDatos.tipo].content);
    renderPokemonBase(info[ordenDatos.experiencia].content);
    renderPokemonAltura(info[ordenDatos.altura].content);
    renderPokemonPeso(info[ordenDatos.peso].content);


}

const setCardColor = () => {
    pokeImg.style.background =  `radial-gradient(green 33%, grey 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes = tipo => {
    pokeTypes.innerHTML = '';
    const typeTextElement = document.createElement("div");
    typeTextElement.textContent = tipo;
    pokeTypes.appendChild(typeTextElement);

    const pokeTypes = document.querySelector('[data-poke-types]');
}
const renderPokemonBase = experiencia => {
    pokeBase.innerHTML = '';
    const baseTextElement = document.createElement("div");
    baseTextElement.textContent = experiencia;
    pokeBase.appendChild(baseTextElement);

    const pokeBase = document.querySelector('[data-poke-base]');
}

const renderPokemonAltura = altura => {
    pokeAltura.innerHTML = '';
    const altTextElement = document.createElement("div");
    altTextElement.textContent = altura;
    pokeAltura.appendChild(altTextElement);

    const pokeAltura = document.querySelector('[data-poke-altura]');
}

const renderPokemonPeso = peso => {
    pokePeso.innerHTML = '';
    const pesoTextElement = document.createElement("div");
    pesoTextElement.textContent = peso;
    pokePeso.appendChild(pesoTextElement);

    const pokePeso = document.querySelector('[data-poke-peso]');
}
const renderPokemonInfo = info => {
    pokeInfo.innerHTML = '';
    const infoTextElement = document.createElement("div");
    infoTextElement.textContent = info;
    pokeInfo.appendChild(infoTextElement);

    const pokeInfo = document.querySelector('[data-poke-info]');
}


const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'poke-shadow.png');
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeId.textContent = '';
}

const ordenDatos = {
    id: 0,
    nombre: 1,
    tipo: 2,
    altura: 3,
    peso: 4,
    experiencia: 5,
    info: 6,
    imagen: 7,

}