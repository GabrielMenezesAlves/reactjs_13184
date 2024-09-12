import React, {useState} from "react";

function Atividade(){
    const [nomeAtividade, setnomeAtividade] = useState('')
    
    
    const adicionar = () => {

    }
    
    return (
        <>
            <input 
            type="text"
            value={nomeAtividade}
            onChange={(e) => setnomeAtividade(e.target.value)} 
            laceholder="Digite o nome da atividade">
            </input>
            <hr></hr>
            <label>{nomeAtividade}</label>
            <hr></hr>
            <button onClick={adicionar}>Adicionar</button>
        
        </>
    )
    
}

export default Atividade;