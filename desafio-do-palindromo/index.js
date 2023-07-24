// diferença entre function declaration e function expression
// Hoisting = içamento = permitido na function declaration
// essaPalavraEUmPalindromo();

// function essaPalavraEUmPalindromo () {
//     var palavra = "rever";
//     var separandoAsLetrasDaPalavra = palavra.split("");
//     console.log(separandoAsLetrasDaPalavra);
//     var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
//     console.log(palavraInvertida);
//     palavraInvertida = palavraInvertida.join("");
    
//     if (palavra == palavraInvertida) {
//         console.log("A palavra " + palavra + " é um palíndromo");        
//     } else {
//         console.log("A palavra " + palavra + " não é um palíndromo");
//     }
//}

// Function Expression não aceita Hoisting = içamento


const essaPalavraEUmPalindromo = function(palavra) {
    var separandoAsLetrasDaPalavra = palavra.split("");
    console.log(separandoAsLetrasDaPalavra);
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    console.log(palavraInvertida);
    palavraInvertida = palavraInvertida.join("");
    
    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo");        
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo");
    }
}

essaPalavraEUmPalindromo("radar");