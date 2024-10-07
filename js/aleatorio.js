const nomes = ["Kleber", "Ângela", "Jonas", "Natalie", "Carlos", "Sofia", "Roberto", "Clara"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)