function redirecionar(numero) {
    let itens = document.getElementsByClassName("itens");

    if (numero == 1) {
        itens[numero].innerHTML = '<a href = "./pages/roupa.html">Redirecionando para roupas</a>'
        window.location.href = "./pages/roupa.html"
    } else if (numero == 2) {
        itens[numero].innerHTML = '<a href = "./pages/livro.html">Redirecionando para livros</a>'
        window.location.href = "./pages/livro.html"
    }
}