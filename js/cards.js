'use strict'

import { getAllProdutos } from "./api.js";

const produtos = await getAllProdutos()

const listarTodosProdutos = (element) => {

    const ul = document.querySelector('ul')
    const div = document.createElement('div')

    const li = document.createElement('li')
    li.classList.add('li-container')


    li.innerHTML = `
        <img src="${element.foto}" alt="">   
                <h3>${element.nome}</h3>
            
                <div>${element.descricao}</div>
                <div>${element.tipo}</div>
        `


    if (element.status_promocao) {
        li.classList.add('promocao')
    }
    if (element.status_favoritos) {
        li.classList.add('favorito')
    }
    if (element.status_favoritos && element.status_promocao) {
        li.classList.add('favorito-promocao')
    }


    div.classList.add('div-container-lista')
    div.id = element.id
    div.appendChild(li)
    ul.appendChild(div)

    return ul
}

const pesquisa = async () => {
    const g = document.getElementById(`div-container-listar`)

    console.log(produtos)

    const prod = produtos.produtos.map(listarTodosProdutos)
    g.replaceChildren(...prod)

}


await pesquisa()
