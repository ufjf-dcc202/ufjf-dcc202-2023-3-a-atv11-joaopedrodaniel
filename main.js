// main.js
import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

// Passo 1 = Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olItens = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click', criarElementoNaLista);


atualizarLista();

function criarElementoNaLista(){
    const texto = pEntrada.textContent.trim();
    if (texto) {
        adicionaNaLista(texto);
        pEntrada.textContent = "";
        pEntrada.focus();
        atualizarLista();
    }
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
        li.onclick = function() {removerItemDaLista(i);};
        olItens.appendChild(li);
    }
}

function removerItemDaLista(index) {
    removeDaLista(index);
    atualizarLista();
}