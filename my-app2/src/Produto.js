
import React, { useState } from "react";

function Produto() {
    const [produtos, setProdutos] = useState({nome: "", preco: "", descricao: "" })
    const [produto, setProduto] = useState([])

    //const [nome, setNome] = useState('')
    //const [preco, setPreco] = useState('')
    //const [descricao, setDescricao] = useState('')

    const onchangeProdutos = (e) =>{

        setProdutos({...produtos, [e.target.name]: e.target.value })
        

    }

    const adicionar = () => {
        setProduto([...produto, produtos])
        
    }

    const excluir = (index) => {
        const produto_temp = [...produto]
        produto_temp.splice(index, 1)
        setProduto(produto_temp)
    }

    

    return (
        <>
            <input
                type="text"
                name="nome"
                value={produtos.nome}
                onChange={onchangeProdutos}
                placeholder="Informe o nome"        >
            </input>
            <input
                type="text"
                name="preco"
                value={produtos.preco}
                onChange={onchangeProdutos}
                placeholder="Informe o preço"        >
            </input>
            <input
                type="text"
                name="descricao"
                value={produtos.descricao}
                onChange={onchangeProdutos}
                placeholder="Informe o descrição"        >
            </input>
            <p>
                <button onClick={adicionar}>Adicionar</button>
            </p>
            <h2>Produtos</h2>
            <ul >
                {produto.map((item, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {item.nome} <br />
                        <strong>Preco:</strong> {item.preco} <br />
                        <strong>Descricao:</strong> {item.descricao}

                        <button onClick={() => excluir(index)}>Excluir</button>
                    </li>
                ))}
            </ul>


        </>
    )
}

export default Produto;