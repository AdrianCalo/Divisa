import React from "react";

//declaro la apí para mas comodidad

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
              {rates.map((rates,index)=>(
                <tr key={index}>
                  <td>{rates.type}</td>
                  <td>{rates.buy}</td>
                  <td>{rates.sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
            
        </>
      );
};

export default ExchangeRates;