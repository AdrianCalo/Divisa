import React from "react";
import '../styles/ExchangeRates.css';

function ExchangeRates({rates}){
    return (
        <>
          <h3>Valores</h3>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>               
                <th>Compra</th>
                <th>Venta</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate,index)=>(
                <tr key={index}>
                  <td>{rate.type}</td>
                  <td>{rate.buy}</td>
                  <td>{rate.sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
            
        </>
      );
};

export default ExchangeRates;