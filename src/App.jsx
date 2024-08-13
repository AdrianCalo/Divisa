import './App.css'
import React from 'react';
import ExchangeRates from './component/ExchangeRates';
import useExchangeRates from './hook/useExchangeRates';

function App() {
  
const rates= useExchangeRates();

  return (
    <>
      <h1>Divisas</h1>
      <ExchangeRates rates={rates}/>      
    </>
  )
}

export default App
