import React, {useState} from "react";

function Atividade(){
    const [Produto, setProduto] = useState('')
    const [Valor, setValor] = useState('')
    const [Descricao, setDescricao] = useState('')
          
    const salvar = () => {
        console.log(Produto + " " + Valor + " " + Descricao)        

    }
    
    return (
        <>
            <input 
            type="text"
            value={Produto}
            onChange={(e) => setProduto(e.target.value)} 
            placeholder="Digite o nome do produto!">
            </input>
            <input 
            type="text"
            value={Valor}
            onChange={(e) => setValor(e.target.value)} 
            placeholder="Digite o Valor do produto!">
            </input>
            <input 
            type="text"
            value={Descricao}
            onChange={(e) => setDescricao(e.target.value)} 
            placeholder="Digite a descricao do produto!">
            </input>
            <hr></hr>            
            <button onClick={salvar}>Salvar</button>
        
        </>
    )
    
}

export default Atividade;