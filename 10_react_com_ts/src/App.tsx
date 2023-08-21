import React from 'react';
import logo from './logo.svg';
import './App.css';
// 4- importanto o componets

import Primeirocomponente from './components/Primeirocomponente';
import Segundocomponente from './components/Segundocomponente'
import Desestruturação from './components/Desestrururação';
import State, {Linguagens} from './components/State';
import { createContext } from 'react';


// 8- type com tsx

type stringOrrNull = string | null

// 9- 

interface IcontextValue{
  linguagem:string,
  framework:string,
  projects:number
}

export const Appcontext = createContext<IcontextValue | null>(null)

function App() {
  // 1- variaveis
  const nome:string= 'adson'
  const idade:number = 18
  const trabalhando:boolean = true

  //2-funcões

  const showpessoa = (nome:string, idade:number)=>{
    return `nome: ${nome}, idade: ${idade}`
  }

  // 8-types

  const string:stringOrrNull = 'adson'
  let hihi:stringOrrNull = null

  // 9- context api

  const contextvalue:IcontextValue ={
    linguagem:Linguagens.js,
    framework:'Express',
    projects:5
  }
  return (
    <Appcontext.Provider value={contextvalue}>
    <div className="App">
        <h1>Hello word React!</h1>
        <h2>nome: {nome}</h2>
        <h2>idade: {idade}</h2>
        {trabalhando && <h2>trabalhando</h2>}

        <h3>{showpessoa(nome,idade)}</h3>
    
      <Primeirocomponente/>

      <Segundocomponente/>

      <Desestruturação nome='adson' profissão='Desenvolvedor' contato='(79) 999908598'/>

      <State/>

      <div>
        <h1>Linguagens que eu programo</h1>
         <ol>
          <li>{Linguagens.js}</li>
          <li>{Linguagens.ts}</li>
         </ol>
          
          <h1>Linguagens que eu quero programar</h1>
          <ol>
            <li>{Linguagens.cc}</li>
            <li>{Linguagens.js}</li>
            <li>{Linguagens.ts}</li>
          </ol>
      
      </div>

      <div>
        {string && <p>Aqui tem uma string</p>}
        {hihi && <p>Aqui tem uma string</p>}
      </div>
      
    </div>
    </Appcontext.Provider>
  );
}

export default App;
