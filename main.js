"use strict"

const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const tituloContexto = document.querySelector('.app__title');

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


//eventos 
focoBt.addEventListener('click',()=>{
    alterarContexto('foco')
});
curtoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-curto')
});
longBt.addEventListener('click',()=>{
    alterarContexto('descanso-longo');
});

tituloContexto.setAttribute('class', )

//funçoes
function alterarContexto(contexto){
    //imagens e cores da imagens
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    //Alterando Texto
    switch(contexto){
        case "foco":
            tituloContexto.innerHTML = `  Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            
            break
        case "descanso-curto":
            tituloContexto.innerHTML = `
            Que tal dar uma respirada?<strong class="app__title-strong">Faça uma pausa rapida</strong>`

            break
        case "descanso-longo":
            tituloContexto.innerHTML = `Hora de voltar a superficie  <strong class="app__title-strong">Faça uma pausa longa</strong>`

            default:
            break;
    }

}



