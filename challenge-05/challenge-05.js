/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valuesAleat = [1, undefined, true, null , "junior"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function(array){
return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(valuesAleat)[1];
//undefined

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myFunction2 = function(array, a){
return array[a];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valuesDif = ["Jason", true, [1, 2, ,3], { carro: "Lambo"} , 9.9];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(valuesDif)[0];
"Jason"
myFunction(valuesDif)[1];
true
myFunction(valuesDif)[2];
(4) [1, 2, empty, 3]
myFunction(valuesDif)[3];
{carro: "Lambo"}
myFunction(valuesDif)[4];
9.9

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function( livro ){
var allLivros= { 
        "Skyrim": {
        quantidadePaginas: 500,
        autor: "Dovhakin",
        editora: "Bethesda"
        },
        "COD": {
        quantidadePaginas: 300,
        autor: "Prince",
        editora: "infinite War"
        },
        "GOD OF WAR": {
        quantidadePaginas: 600,
        autor: "Matthew Stover",
        editora: "Leya"
    }
};

return !livro ? allLivros : allLivros[ livro ];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
/*{Skyrim: {…}, COD: {…}, GOD OF WAR: {…}}
Skyrim: {quantidadePaginas: 500, autor: "Dovhakin", editora: "Bethesda"}
COD: {quantidadePaginas: 300, autor: "Prince", editora: "infinite War"}
GOD OF WAR: {quantidadePaginas: 600, autor: "Matthew Stover", editora: "Leya"}
__proto__: Object
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = "COD"
book("O livro " + livro + book("Skyrim").quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book("O autor do livro" + livro + " é " + book( livro ).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book("O livro " + livro + "foi publicado pela editora" + book( livro ).editora +".");
