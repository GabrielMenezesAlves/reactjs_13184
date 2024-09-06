import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Opa from './Opa'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Ola(props) {
  return <h1>Olá {props.nome}</h1>
}

function Mensagem() {
  return <ol>
    <li>cidades</li>
    <li>lugares</li>
    <li>objetos</li>
    <li>viagens</li>
    <li>ferias</li>
  </ol>
}

class Nome extends React.Component {
  render() {
    return <h2>Nome: {this.props.identificacao}</h2>
  }
}

class Email extends React.Component {
  render() {
    return <h2>Email: {this.props.identificacao}</h2>
  }
}

class Turma extends React.Component {
  render() {
    return <h2>Turma: {this.props.identificacao}</h2>
  }
}



root.render(
  <div>
    <Ola nome="Gabriel"></Ola>  
    <Nome identificacao="Gabriel Menezes Alves"></Nome>
    <Email identificacao="gabriel@123.com"></Email>
    <Turma identificacao="13184"></Turma>


    <Mensagem></Mensagem>
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();