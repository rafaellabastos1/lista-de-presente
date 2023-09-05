function redirecionar(numeroItem) {
    let itens = document.getElementsByClassName("itens");

    if (numeroItem == 0) {
        itens[numeroItem].innerHTML = '<a href = "./itens/roupa.html">Redirecionando para roupas</a>'
        window.location.href = "./itens/roupa.html"
    } else if (numeroItem == 1) {
        itens[numeroItem].innerHTML = '<a href = "./itens/livro.html">Redirecionando para livros</a>'
        window.location.href = "./itens/livro.html"
    } else if (numeroItem == 2) {
        itens[numeroItem].innerHTML = '<a href = "./itens/beleza.html">Redirecionando para produtos de beleza</a>'
        window.location.href = "./itens/beleza.html"
    } else if (numeroItem == 3) {
        itens[numeroItem].innerHTML = '<a href = "./itens/decoracao.html">Redirecionando para decoração</a>'
        window.location.href = "./itens/decoracao.html"
    } else if (numeroItem == 4) {
        itens[numeroItem].innerHTML = '<a href = "./itens/magia.html">Redirecionando para magia</a>'
        window.location.href = "./itens/magia.html"
    } else if (numeroItem == 5) {
        itens[numeroItem].innerHTML = '<a href = "./itens/ideias.html">Redirecionando para ideias</a>'
        window.location.href = "./itens/ideias.html"
    } else if (numeroItem == 6) {
        itens[numeroItem].innerHTML = '<a href = "./itens/pix.html">Redirecionando para número do pix</a>'
        window.location.href = "./itens/pix.html"
    } 
}

function roupa(numeroRoupa) {
    let itens = document.getElementsByClassName("itens");
    if (numeroRoupa == 0) {
        itens[numeroRoupa].innerHTML = '<a href = "./subitens/camiseta.html">Redirecionando para camisetas</a>'
        window.location.href = "../subitens/camiseta.html"
    } else if (numeroRoupa == 1) {
        itens[numeroRoupa].innerHTML = '<a href = "./subitens/cropped.html">Redirecionando para croppeds</a>'
        window.location.href = "../subitens/cropped.html"
    } else if (numeroRoupa == 2) {
        itens[numeroRoupa].innerHTML = '<a href = "./subitens/blusadefrio.html">Redirecionando para blusas de frio</a>'
        window.location.href = "../subitens/blusadefrio.html"
    } else if (numeroRoupa == 3) {
        itens[numeroRoupa].innerHTML = '<a href = "./subitens/calca.html">Redirecionando para calças</a>'
        window.location.href = "../subitens/calca.html"
    } else if (numeroRoupa == 4) {
        itens[numeroRoupa].innerHTML = '<a href = "./subitens/tenis.html">Redirecionando para tênis</a>'
        window.location.href = "../subitens/tenis.html"
    }
}

function beleza(numeroBeleza) {
    let itens = document.getElementsByClassName("itens");
    if (numeroBeleza == 0) {
        itens[numeroBeleza].innerHTML = '<a href = "../subitens/rosto.html">Redirecionando para produtos de rosto</a>'
        window.location.href = "../subitens/rosto.html"
    } else if (numeroBeleza == 1) {
        itens[numeroBeleza].innerHTML = '<a href = "../subitens/corpo.html">Redirecionando para produtos de corpo</a>'
        window.location.href = "../subitens/corpo.html"
    } else if (numeroBeleza == 2) {
        itens[numeroBeleza].innerHTML = '<a href = "../subitens/cabelo.html">Redirecionando para produtos de cabelo</a>'
        window.location.href = "../subitens/cabelo.html"
    } else if (numeroBeleza == 3) {
        itens[numeroBeleza].innerHTML = '<a href = "../subitens/unha.html">Redirecionando para produtos de unha</a>'
        window.location.href = "../subitens/unha.html"
    }
}
