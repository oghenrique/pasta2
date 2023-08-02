'use strict'

//3 - var   -> Mutável  -> Global
//2 - let   -> Mutável  -> Bloco
//1 - const -> Imutável -> Bloco

function cadastrar(){
    const nome1 = document.getElementById('nome')
    const nome = prompt('Digite seu nome')
    nome1.textContent = 'Nome: ' + nome

    const idade1 = document.getElementById('idade')
    const idade = prompt('Digite sua idade')
    idade1.textContent = 'Idade: ' + idade

    const cidade1 = document.getElementById('cidade')
    const cidade = prompt('Digite sua cidade')
    cidade1.textContent = 'Cidade: ' + cidade
}  

const botao = document.getElementById('botao-cadastrar')
botao.addEventListener('click', cadastrar )