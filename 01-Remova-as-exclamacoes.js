// Escreva uma função que remova todos os pontos de exclamação de uma string dada.

function removeExclamacoes(x) {
  return x.replace(/!/, "");
}

// Teste
console.log(removeExclamacoes("Olá mundo!!!"));



// Resposta
// A função removeExclamacoes está errada pois a expressão regular (regex) na chamada do método replace /! removerá apenas o primeiro ponto de exclamação. Para remover todos os pontos de exclamação pode-se aplicar a letra g ao fim da expressão regular de forma que a busca fique global.

// Resposta correta:

function removeExclamacoes(x) {
    return x.replace(/!/g, "");
  }