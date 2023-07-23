// exemplos de Arrow Funcition 

// Declarando uma função
function sum(number1, number2) {
    return number1 + number2
}

console.log(sum(10,10));


// Mesma função utilizando Arrow function 
const somaUm = (number1, number2) => {
    return number1 + number2
};

console.log(somaUm(20,10));


// 1ª variação - sem return mas retorna
const somaDois = (number1, number2) => number1 + number2

console.log(somaDois(20,10));


// 2ª variação - sem parâmetros
const comunidade = () => {
    return "CollabCode";
} 

console.log(comunidade());

// outra forma de escrita sem o return
const community = () => "AlFaS"; 

console.log(community());


// 3ª variação - só há um parâmetro
const double = numero => numero * 2;

console.log(double(4));


// 4ª variação - dois ou mais parâmetros tem que ter as chaves na Arrow function
const somaTres = (number1, number2, number3) => number1 + number2 + number3;

console.log(somaTres(10,20,30));


// 5ª variação - Arrow function com chaves quando tem uma condição para ser resolvida

const confereIdade = (year) => {
    if (year >= 18) {
        return "Maior idade";
    }     
    return "Menor idade";    
};

console.log(confereIdade(20));


// 6ª variação - Retornando un JSON sem return

const getPerson = () => {
    return {name: "Henri"}
};

console.log(getPerson());

// agora sem o return

const getPersona = () => ({name: "Alex", eye: "blue"});


console.log(getPersona());


// 7ª variação - Criando uma IFFE usando arrow function
// modelo de função IFFE
function init() {
    const getPersona = () => ({name: "Fabiano", eye: "green"});

    console.log(getPersona());
}

init();

// utilizando uma arrow function

(() => {
    const getPersona = () => ({name: "Aroucho", eye: "red"});

    console.log(getPersona());
})();


// 8ª variação - This dentro do Javascript dentro da Arrow Function

(() => {
    function person() {
        this.year = 0;
    
        setInterval(() => {
            this.year = this.year + 1;
            console.log("Qual this?", this);
            console.log("Qual é a idade?", this.year)
        }, 1000)
    }
    const p1 = new person()

})();









