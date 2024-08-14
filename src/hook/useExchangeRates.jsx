
// Declaro la API para más comodidad
//const api = 'https://dolarapi.com/v1/dolares';

import { useEffect, useState } from 'react';

const useExchangeRates = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('/api', {//se llama a la api del archivo vite.config.js
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos'); 
        }

        const data = await response.json();

        console.log(data);
        
        //filtrar y mapear los datos para obtener las tasas de cambio
        const filteredRates= data.map(item=>({
            type: item.nombre,
            buy:item.compra,
            sell:item.venta,
            updateAt:item.fechaActualizacion
        }));

        setRates(filteredRates);
       
      } catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
      }
    };

    fetchRates();
  }, []);

  return rates;
};

export default useExchangeRates;