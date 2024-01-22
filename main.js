"use strict"

const html= document.querySelector('html');
const focoBt= document.querySelector('.app__card-button--foco');
const curtoBt= document.querySelector('.app__card-button--curto');
const longBt= document.querySelector('.app__card-button--longo');
const banner= document.querySelector('.app__image');
const tituloContexto= document.querySelector('.app__title');
const botoes= document.querySelectorAll('.app__card-button');
const musicaFocoInput= document.getElementById('alternar-musica');
const musica= new Audio('/sons/luna-rise-part-one.mp3') //readFile()
musica.loop=true;

musicaFocoInput.addEventListener('change', () =>{
if(musica.paused){
    musica.play();
    musica.currentTime = 10; 
}else {
    musica.pause();
}
})

//eventos 
focoBt.addEventListener('click',()=>{
    alterarContexto('foco');
    focoBt.classList.add('active')
});
curtoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active')   
});
longBt.addEventListener('click',()=>{
    alterarContexto('descanso-longo');
    longBt.classList.add('active')
});

// tituloContexto.setAttribute('class', )

//funçoes
function alterarContexto(contexto){
    //remover a classe active dos botes (foco,descanso..)
    botoes.forEach(function(contexto){
        {
            contexto.classList.remove('active');
        };
    })

    //imagens e cores de fundo de acordo c as imagens
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



