import React from 'react';
import logo from './logo.svg';
import './App.css';

const nome:string= 'adson'
const idade:number = 18
const trabalhando:boolean = true

function App() {
  return (
    <div className="App">
        <h1>Hello word React!</h1>
        <h2>nome: {nome}</h2>
        <h2>idade: {idade}</h2>
        {trabalhando && <h2>trabalhando</h2>}
    </div>
  );
}

export default App;
