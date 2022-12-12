'use strict';
//objeto
//documento

const nav = document.querySelector('.nav');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const listHeader = document.querySelector('.list--header');


//const navMenuIcon = document.querySelector('#icon-menu');

iconMenu.addEventListener('click', () =>{
    listHeader.style.pointerEvents = 'auto';
    listHeader.style.opacity = 1;
});


iconClose.addEventListener('click', () =>{
    listHeader.style.pointerEvents = 'none';
    listHeader.style.opacity = 0;
})


//console.log(iconMenu);