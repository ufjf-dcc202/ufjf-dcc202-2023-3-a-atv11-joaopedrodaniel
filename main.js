// main.js
import {getLista, limparLista} from "./lista.js";

// Passo 1 = Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.


atualizarItensDeLista();

function limparElementosDaLista(){
    limparLista();
    atualizarItensDeLista();
}

function atualizarItensDeLista() {
    olSaida.innerHTML = "";
    const lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}