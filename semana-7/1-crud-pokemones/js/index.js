"use strict";

class Pokemon {
  constructor(name, type, hp, attack, special, imgUrl){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.special = special;
    this.imgUrl = imgUrl;
  }
};



const documentReady = () => {
  const pokemons = [];
  //const tBodyPokemons = document.getElementById("tBodyPokemons");
  const formPokemon = document.getElementById("formPokemon");

  const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms["formPokemon"];

    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const hp = documentFormPokemon.hp.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value

    let pokemon = new Pokemon(name,type,hp,attack, special,imgUrl);
    pokemons.push(pokemon);
    readPokemons();
  };

  const readPokemons = () => {
    const tBodyPokemons = document.getElementById("tBodyPokemons");
    tBodyPokemons.innerHTML = '';
    pokemons.forEach((element, index) =>{
      const {name, type, hp, attack, special, imgUrl} = element;
      tBodyPokemons.innerHTML += `
      <tr>
        <td>${index}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${hp}</td>
        <td>${attack}</td>
        <td>${special}</td>
        <td>
          <img
            src="${imgUrl}"
            alt="${name}" class="img-fluid" style="max-width: 128px;"/>
        </td>
      </tr>`
    });
    
  };

  formPokemon.addEventListener("submit", createPokemon);
};

document.addEventListener("DOMContentLoaded", documentReady);
