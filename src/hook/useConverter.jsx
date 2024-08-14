import { useState } from "react";

const useConverter= (rates)=>{
    const[Convertered,setConvertered]=useState({});

    const convertToDollar = (amount) => {
        const results = rates.reduce((acc, rate) => {
          acc[rate.type] = (amount / rate.buy).toFixed(2);
          return acc;
        }, {});
        setConvertered(results);
      };


      const converterToPesos=(amount)=>{
        const result= rates.reduce((acc, rate)=>{
            acc[rate.type]=(amount*rate.sell).toFixed(2);
            return acc;
        },{});
        setConvertered(result);
      };

      return {Convertered, convertToDollar,converterToPesos};
}//final

export default useConverter;