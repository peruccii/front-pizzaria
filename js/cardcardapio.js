'use strict'

import { getAllProdutos } from "./api.js";

const produtos = await getAllProdutos()

const listarTodoCardapio = (element) => {

    const ul = document.querySelector('.scroll')
    const div = document.createElement('div')
    const li = document.createElement('li')
    ul.classList.add('ul-container-cardapio')
    li.classList.add('li-container-cardapio')


    li.innerHTML = `
                <img src="${element.foto}" alt="" class="img-container-cardapio"> 
                <div>
                    <h3>${element.nome}</h3>
                    <div>${element.descricao}</div>
                </div>
                    <div>${element.preco}</div>
                    
            `

    if (element.status_promocao) {
        li.classList.add('cardapio-promocao')
    }

    div.classList.add('listar-cardapio')
    div.appendChild(li)
    ul.appendChild(div)

    return ul

}


const pesquisa = async () => {
    const g = document.getElementById(`listar-cardapio-container`)
    const prod = produtos.produtos.map(listarTodoCardapio)
    g.replaceChildren(...prod)

}

await pesquisa()