const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionarNaLista(novoItem){
    lista.push(novoItem);
}
// export {getLista};