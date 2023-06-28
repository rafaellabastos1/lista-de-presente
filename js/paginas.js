function redirecionar(numero) {
    let itens = document.getElementsByClassName("itens");

    if (numero == 0) {
        itens[numero].innerHTML = '<a href = "./pages/roupa.html">Redirecionando para roupas</a>'
        window.location.href = "./pages/roupa.html"
    } else if (numero == 1) {
        itens[numero].innerHTML = '<a href = "./pages/livro.html">Redirecionando para livros</a>'
        window.location.href = "./pages/livro.html"
    } else if (numero == 2) {
        itens[numero].innerHTML = '<a href = "./pages/beleza.html">Redirecionando para produtos de beleza</a>'
        window.location.href = "./pages/beleza.html"
    } else if (numero == 3) {
        itens[numero].innerHTML = '<a href = "./pages/decoracao.html">Redirecionando para decoração</a>'
        window.location.href = "./pages/decoracao.html"
    } else if (numero == 4) {
        itens[numero].innerHTML = '<a href = "./pages/magia.html">Redirecionando para magia</a>'
        window.location.href = "./pages/magia.html"
    } else if (numero == 5) {
        itens[numero].innerHTML = '<a href = "./pages/ideias.html">Redirecionando para ideias</a>'
        window.location.href = "./pages/ideias.html"
    } else if (numero == 6) {
        itens[numero].innerHTML = '<a href = "./pages/pix.html">Redirecionando para número do pix</a>'
        window.location.href = "./pages/pix.html"
    }
}