/*Palavras reservadas que permitem criar variáveis dentro do JavaScript
var => variável de escopo global, a variável definida com 'var' pode ser acessado em qualquer escopo. p. ex: 'var nome;' pode ser usado dentro de uma <div>, um <p>
let => variável de escopo local, a variável funcionará apenas no escopo onde for definida
const => variável de escopo global e é uma variável constante, que não muda seu valor (pouco usual pois sempre fazemos alterações no código)

Por questão de boas práticas usa-se o 'let' para evitar conflitos de escopo.

Trata-se de uma variável definida na ultima atualização do ECMAScript, 
base do JavaScript e são padroonizados pelo ECMA International Standards Organization. */

/* VALE LEMBRAR, que o JavaScript é uma linguagem Case Sensitive, ou seja, é uma linguagem que
reconhece letras maiúsculas e letras minúsculas para as palavras reservadas da linguagem.
p. ex:

getElementById ✔
getelementbyid ✖
GETELEMENTBYID ✖

acessivel:
por Tag: getElementByTagName()
por Id: getElementById() 
por Nome: getElementsByName() => 'Elements' porque o nome pode ser acessada por vários elementos
por classe: getElementsByClassName => 'Elements' porque a classe pode ser acessada por vários elementos
por seletor: querySelector() => será o mais usado, pois permite selecionar só a tag name, ou o id ou a classe.
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"
