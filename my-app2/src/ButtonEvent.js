

import React from "react";

class ButtonEvent extends React.Component {

    constructor(props) {
        super(props)        
    }

    click(){
        console.log("Opa, voce clicou no botao!")
    }

    render() {
        return <>
            <button onClick={this.click} >Clique aqui para imprimir uma menssagem no console do browser.</button>
        </>
    }

}

export default ButtonEvent;