'use strict';
//objeto
//documento

const nav = document.querySelector('.nav');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const listHeader = document.querySelector('.list--header');


//const navMenuIcon = document.querySelector('#icon-menu');
// elemento mas alto en todo js es window

document.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scroll', window.scrollY>0);
    //si  tienes la clase te lo quito y si no la tienes te lo asigna
});

iconMenu.addEventListener('click', () =>{
    //listHeader.style.pointerEvents = 'auto';
    //listHeader.style.opacity = 1;
    listHeader.classList.add('list--header-show')
});


iconClose.addEventListener('click', () =>{
    //listHeader.style.pointerEvents = 'none';
    //listHeader.style.opacity = 0;
    listHeader.classList.remove('list--header-show')
})


//console.log(iconMenu);