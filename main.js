// main.js
import {adicionarNaLista, getLista, limparLista} from "./lista.js";

// Passo 1 = Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olItens = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click', criarElementoNaLista);


atualizarLista();

function criarElementoNaLista(){
    const texto = pEntrada, textContent;
    adicionarNaLista(texto);
    atualizarLista();
    pEntrada.textContent="";
    pEntrada.focus();
}

function limparElementosDaLista(){
    limpaLista();
    atualizarLista();
}

function atualizarLista() {
    olItens.innerHTML = "";
    const lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olSaida.appendChild(li);
    }
}