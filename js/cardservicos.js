'use strict'

import { getAllServicos } from "./api.js";

const servicos = await getAllServicos()

const listarTodosServicos = (element) => {

    const ul = document.querySelector('.services')
    const div = document.createElement('div')
    const li = document.createElement('li')
    li.classList.add('li-container-servicos')


    li.innerHTML = `
            <img src="${element.foto}" alt="">   
                    <h3>${element.nome}</h3>
                
                    <div>${element.descricao}</div>
            `

    div.classList.add('listar-servicos')
    div.appendChild(li)
    ul.appendChild(div)

    return ul

}

const pesquisa = async () => {
    const g = document.getElementById(`listar-servicos`)

    console.log(servicos)

    const serv = servicos.servicos.map(listarTodosServicos)
    g.replaceChildren(...serv)

}

await pesquisa()

