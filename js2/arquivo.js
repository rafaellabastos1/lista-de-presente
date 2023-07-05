//--------------------dom-introducao.js
//Função sem argumento
function avisar() {
    alert("Essa é uma função")
}

avisar ()

//Exemplo getElementById
let novo = document.getElementById("idNome")

function mudar() {
    document.getElementById("titulo").innerHTML = novo.value
}

//Exemplo por getElementsByClassName
function inserir() {
    let novo = document.getElementById("novo").value
    let numero = document.getElementById("posicao").value -1
    document.getElementsByClassName("corredor")[numero].innerHTML = novo
}

// Exemplo por getElementsByTagName
function mostrar() {
    let numero = document.getElementById("numero").value -1
    let mes = document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = mes
}

//-------------------------------introducao.js
//Escrever no console do navegador
console.log("Está é uma impressão no console")

//Variável com valor definido
let nome;

//Variável vazia
let disciplina = null;

//Variável com valor
let texto = "Este é um exemplo"

//Exemplo
let carro = {
    cor: "preto",
    numPortas: 4,
    tipo: "Sedan",
    modelo: "Ônix",
    marca: "GM",
    correr: function() {
        alert("Estou correndo")
    }
}

console.log(carro.modelo);
carro.correr()

//Transforma o número float em inteiro
let numFloat = 123.5432
console.log(parseInt(numFloat));

//Transforma a string em float
let numString = "123.5432"
console.log(parseFloat(numString));

//Transforma o número float em string
let numeFloat = 123.5432
console.log(numeFloat.toString());

//Verifica o tipo da variável
let verificar = typeof numString
console.log(verificar);

//Verifica o tamanho da variável
let pedido = "Quero um copo d\'água"
alert(pedido.length)

//Posição da primeira ocorrência de uma string no texto
let txt1 = "Estão chegando as provas"
console.log(txt1.indexOf("as"));

//Posição da última ocorrência de uma string no texto
let txt2 = "Estão chegando provas as"
console.log(txt2.lastIndexOf("as"));

//Extrair uma parte do texto
let txt3 = "Estão chegando as provas"
console.log(txt3.slice(0, 5));

//Substituir um trecho do texto
let txt4 = "Estão chegando as provas"
console.log(txt4.replace("provas", "avaliações"));

//Converte string em letra maiúscula
let txt5 = "Estão chegando as provas"
console.log(txt5.toUpperCase());

//Converte string em letra minúscula
let txt6 = "Estão chegando as provas"
console.log(txt6.toLowerCase());

//Define o número de casas decimais
let num1 = 123.5432
console.log(num1.toFixed(2));

//Define o número de casas numéricas
let num2 = 123.5432
console.log(num2.toPrecision(4));

//Caixa de alerta
alert("Sou uma caixa de alerta")

//Caixa de confirmação
let caixaTeste = confirm("Você é um aluno?")
console.log("Resultado da caixa confirme: ", caixaTeste);

//Caixa de texto
let caixaTexto = prompt("Qual seu nome?", "escreva aqui")
console.log("O nome dele é", caixaTexto);


//-----------------------testes-logicos.js
//Verificação if
let valor1 = 10
if (valor1 > 7) {
    console.log("O valor é maior que 7")
}

//Verificação if else
let valor2 = 10
if (valor2 >= 15) {
    console.log("O valor é maior ou igual a 15")
} else {
    console.log("O valor é menor que 15")
}

//Verificação if else if else
let idade = 19
if (idade <= 12) {
    console.log("É uma criança")
} else if (idade <= 17) {
    console.log("É um adolescente")
} else if (idade <= 29) {
    console.log("É um jovem")
} else {
    console.log("É um adulto")
}

//Mais de um teste lógico
let valor3 = 15
if (valor3 > 10 && valor3 < 20) {
    console.log("Este valor é válido")
} else if (valor3 < 1 || valor3 < 10) {
    console.log("Este valor não é válido")
}

//Switch case
let teste = 2
switch (teste) {
    case 1:
        console.log("Foi de primeira")
        break;
    case 2:
        console.log("Foi de segunda")
        break;
    default:
        console.log("Não foi nem de primeira nem de segunda")
        break;
}

//Incremento e decremento
let valor4 = 7
console.log(valor4); //7
valor4 = valor4 + 1
console.log(valor4); // 8
valor4++
console.log(valor4); //9
valor4 += 3
console.log(valor4) //12
valor4 --
console.log(valor4) //11
valor4 -= 4
console.log(valor4); //7
valor4 *= 4
console.log(valor4); //28
valor4 /= 8
console.log(valor4) //3.5

//For
for (let i = 0; i < 10; i++) { //Inicialização, condição, incremento
    console.log("Agora i vale " + i);
}

//Percorre o array
let frutas1 = ["maçã", "banana", "uva", "pera"]
for (let i = 0; i < frutas1.length; i++) {
    console.log(frutas1[i]);
}

let frutas2 = ["maçã", "banana", "uva", "pera"]
for (let fruta of frutas2) {
    console.log(fruta);
}

//While
let cont1 = 0
while (cont1 < 10) {
    console.log("Passagem " + cont1);
    cont1 ++
}

//Do while
let cont2 = 0
do {
    console.log("Passagem " + cont2);
    cont2++
} while (cont2 == 0)

let cont3 = 0
do {
    console.log("Passagem " + cont3);
    cont3++
} while (cont3 < 0)
