"use strict"

const html= document.querySelector('html');
const focoBt= document.querySelector('.app__card-button--foco');
const curtoBt= document.querySelector('.app__card-button--curto');
const longBt= document.querySelector('.app__card-button--longo');
const banner= document.querySelector('.app__image');
const tituloContexto= document.querySelector('.app__title');
const botoes= document.querySelectorAll('.app__card-button');
const musicaFocoInput= document.getElementById('alternar-musica');
const startPauseBtn = document.getElementById('start-pause');
const IniciarOuPausarBt = document.querySelector('#start-pause span');
console.log(IniciarOuPausarBt)

//sons
const musicaLuna= new Audio('/sons/luna-rise-part-one.mp3'); //readFile() também é uma forma de instanciar o audio
const musicaPlay= new Audio('/sons/play.wav');
const musicaPause= new Audio('/sons/pause.mp3');
const musicaBeep= new Audio('sons/beep.mp3');

musicaLuna.loop=true;


let tempoCorrido=5;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () =>{
if(musicaLuna.paused){
    musicaLuna.play();
    musicaLuna.currentTime = 10; 

    //usamos change quando trata-se de audio
    //musica.pause(); Pausa a reprodução
    // musica.currentTime = 10;  Move para 10 segundos no áudio
    // musica.volume = 0.5;Define o volume para metade (50%)
    // musica.play(); Inicia a reprodução

}else {
    musicaLuna.pause();
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
    });
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

//temporizador
const contagemRegressiva =()=>{
    if(tempoCorrido == 0){
        // musicaBeep.play()
        alert("tempo finalizado");
        Zerar()
        return
    }
    tempoCorrido -=1;
    console.log(`temporizador: ${tempoCorrido}`);

}
startPauseBtn.addEventListener('click',Iniciar());


function IniciarOuPausar(){ 
   
    // musicaPlay.play();
    if(intervaloId){
        musicaPlay.play();
        Zerar();
        return
    }musicaPlay.play()
    intervaloId = setInterval(contagemRegressiva,1000);
}

function Zerar (){
    clearInterval(intervaloId) //metodo que faz com que pare 
    intervaloId =null
}

// let figu = document.querySelector('figure');
// let ParentFigure = figu.parentNode;
// console.log(ParentFigure.classList);


// const container = document.getElementById('container');
// const childNodes = container.childNodes;
// console.log(childNodes.length); // Saída: 1 (o nó de texto "\n  " é considerado um nó filho)
// console.log(childNodes[0].nodeName); // Saída: "#text"
// console.log(childNodes[1].nodeName); // Saída: "P"
