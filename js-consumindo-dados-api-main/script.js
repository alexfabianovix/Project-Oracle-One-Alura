
// console.log("Mandando oi pro amigo!");

// function mandaMensagem() {
//    console.log("Tudo bem?");
//    console.log("Vou te mandar uma solicitação!");
//    console.log("Solicitação recebida!");    
// }
// Callbacks - funções que são enviadas dentro de outras funções
// setTimeout(mandaMensagem, 5000);

// console.log("Tchau tchau!");

// API - Interface de Programação de Aplicações

// Syntax Sugar - Outra forma de fazer o mesmo sem entrar no CallBack Hell

async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error("Cep inválido. Tente novamente.")
        }
        var cidade = document.getElementById("cidade");
        var logradouro = document.getElementById("endereco");
        var estado = document.getElementById("estado");
        var bairro = document.getElementById("bairro");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;


        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente. </p>`
        console.log(erro);
    }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));



//Quando se tem várias requisições para uma mesmo função, aqui demonstrado consultando varios ceps de uma vez

// let ceps = ["01001000", "01001001", "29162012"];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

// Se houver mais .then isso se torna o CALLBACKHELL
// .then(resposta => resposta.json())
// .then(r => { 
//     if (r.erro) {
//         throw Error("Esse cep não existe!");
//     }  
//         console.log(r);
//     })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log("Processamento concluído!"));

// tres estados da promessa - PromiseState: "fullfiled", "rejected", "pendding"



// console.log(consultaCEP);
