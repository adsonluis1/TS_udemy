import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  // 1- variaveis
  const nome:string= 'adson'
  const idade:number = 18
  const trabalhando:boolean = true

  //2-funcões

  const showpessoa = (nome:string, idade:number)=>{
    return `nome: ${nome}, idade: ${idade}`
  }

  //3-

  return (
    <div className="App">
        <h1>Hello word React!</h1>
        <h2>nome: {nome}</h2>
        <h2>idade: {idade}</h2>
        {trabalhando && <h2>trabalhando</h2>}

        <h3>{showpessoa(nome,idade)}</h3>

    </div>
  );
}

export default App;
