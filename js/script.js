import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const
caixaPrincipal = document.querySelector(".caixa-principal"),
caixaPerguntas = document.querySelector(".caixa-perguntas"),
caixaAlternativas = document.querySelector(".caixa-alternativas"),
caixaResultado = document.querySelector(".caixa-resultado"),
textoResultado = document.querySelector(".texto-resultado"),
botaoJogarNovamente = document.querySelector(".novamente-btn"),
botaoiniciar = document.querySelector(".iniciar-btn"),
telaIncial  = document.querySelector(".tela-iniciar");

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoiniciar.addEventListener('click', iniciaJogo);

function inicaJogo(){
    atual = 0;
    historiaFinal = "";
    telaIncial.style.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Em 2049, $(nome)`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classlist.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

mostraPergunta();
