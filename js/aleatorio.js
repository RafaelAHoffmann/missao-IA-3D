const nomes = ["Kleber", "Adailane", "Jorisvaldo", "Natalie", "Kalashnikov", "Sophia"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)