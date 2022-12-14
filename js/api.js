const getAllProdutos = async ()=>{
    const url = `http://localhost:8080/v1/produtos`

    const response = await fetch(url)

    const produtos = response.json()

    return produtos
} 

const getAllServicos = async () => {
    const url = `http://localhost:8080/v1/servicos`

    const response = await fetch(url)

    const servicos = response.json()

    return servicos
}

const deleteProduto = async(id)=>{
    const url = `http://localhost:8080/v1/apagar/produto/${id}`

    const init = {
        method: "DELETE"
    }

    const response = await fetch(url, init)

    const produto = response.json()

    return produto
}


export {

    getAllProdutos,
    getAllServicos,
    deleteProduto

}