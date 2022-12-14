'use strict'

const inputBusca = document.getElementById('search-input')
const tabelaCardapio = document.getElementById('div-container-listar')


inputBusca.addEventListener('keyup', () => {
  let expressao = inputBusca.value

  let linhas = tabelaCardapio.getElementsByTagName('div')

  for(let posicao in linhas) {
    if( true === isNaN(posicao)){
      continue
    }
    
    let conteudoDaLinha = linhas[posicao].innerHTML

    if (true === conteudoDaLinha.includes(expressao)){
      linhas[posicao].style.display = ''
    }else{
      linhas[posicao].style.display = 'none'
    }

  }
})