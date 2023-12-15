const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionaNaLista(novoItem){
    lista.push(novoItem);
}

export function removeDaLista(index) {
    if (index >= 0 && index < lista.length) {
        lista.splice(index, 1);
    }
}