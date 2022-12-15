"use strict";

const documentReady = () => {
  const tBodyPokemons = document.getElementById("tBodyPokemons");
  const formPokemon = document.getElementById("formPokemon");

  tBodyPokemons.innerHTML += `
  <tr>
    <td>1</td>
    <td>Pikachu</td>
    <td>Eléctrico</td>
    <td>250</td>
    <td>Trueno</td>
    <td>Voltio</td>
    <td>
      <img
        src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/1200px-Pikachu.png"
        alt="Pikachu" class="img-fluid" style="max-width: 128px;" />
    </td>
  </tr>
  `;

  const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms["formPokemon"];

    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const hp = documentFormPokemon.hp.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;

    tBodyPokemons.innerHTML += `
    <tr>
      <td>1</td>
      <td>${name}</td>
      <td>${type}</td>
      <td>${hp}</td>
      <td>${attack}</td>
      <td>${special}</td>
      <td>
        <img
          src="${imgUrl}"
          alt="${name}" />
      </td>
    </tr>
  `;
  };

  formPokemon.addEventListener("submit", createPokemon);
};

document.addEventListener("DOMContentLoaded", documentReady);
