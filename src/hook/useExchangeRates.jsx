
//declaro la api para mas comodidad
const api='https://dolarapi.com/v1/dolares'

import { useEffect, useState } from 'react';

const useExchangeRates = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(api);
      const data = await response.json();
    
      console.log(data[0].compra)

      setRates([
        { type: 'Oficial', buy: data.oficial_buy, sell: data.oficial_sell },
        { type: 'Blue', buy: data.blue_buy, sell: data.blue_sell },
        { type: 'MEP', buy: data.mep_buy, sell: data.mep_sell },
        { type: 'Tarjeta', buy: data.tarjeta_buy, sell: data.tarjeta_sell },
      ]);
    };

    fetchRates();
  }, []);

  return rates;
};

export default useExchangeRates;