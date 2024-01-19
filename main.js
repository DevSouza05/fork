"use strict"

const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

// const imagem = document.getElementById('minhaImagem');
// imagem.removeAttribute('src');

// const paragrafo = document.getElementById('Meuparagrafo');
// paragrafo.setAttribute('id', 'paragrafoModificado');
// paragrafo.setAttribute('data-novo-atributo', 'novo valor');

// const elemento = document.getElementById('timer');
// const elementoDoAtributo= elemento.getAttribute('data-info');
// console.log(elementoDoAtributo) 

// const link = document.querySelector('.app__image');
// const temSrc=link.hasAttribute('src');
// console.log(temSrc)

//imagens e cores da imagens
focoBt.addEventListener('click',()=>{
    html.setAttribute('data-contexto', 'foco'),// "foco" e as demais. voce encontra no css
    banner.setAttribute('src', '/imagens/foco.png')
});
curtoBt.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'descanso-curto'),
    banner.setAttribute('src', '/imagens/descanso-curto.png')
});
longBt.addEventListener('click',()=>{
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/imagens/descanso-longo.png')
});

