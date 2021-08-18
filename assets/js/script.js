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

/* Por boas práticas, todas as variáveis devem ser declaradas no início do documento js */
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

/* a função de validação só será carregada quando a função for chamada através de eventos */
function validaNome(){

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else {
        txtAssunto.style.display = "none"
        // txtAssunto.innerHTML = "Texto válido"
        // txtAssunto.style.color = 'green'
        assuntoOk = true
    }

}


function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulario enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar")
    }

}

function mapaZoom (){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal () {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}