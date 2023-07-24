/* const btnFiltrarLivrosDeFront = document.getElementById("btnFiltrarLivrosFront");

btnFiltrarLivrosDeFront.addEventListener("click", filtrarLivros); */

const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    // Exemplo de operador ternário
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) ;
    /* console.table (livrosFiltrados); */
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    };

}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ` 
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

/*
<div class="livros__disponiveis">
<p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
</div>

*/