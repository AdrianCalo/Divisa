import React, { useState } from "react";

const Converter = ({ rates }) => {
    const [pesos, setPesos] = useState('');
    const [dolares, setDolares] = useState('');
    const [converteredToUSD, setconverteredToUSD] = useState([]);
    const [converteredToPesos, setConverteredToPesos] = useState([]);

    const handleConverterToDolar = () => {
        const conversion = rates.map(rate => ({
            type: rate.type,
            value: (pesos / rate.sell).toFixed(2)
        }));
        setconverteredToUSD(conversion);
    };

    const handleConverterToPesos = () => {
        const conversion = rates.map(rate => ({
            type: rate.type,
            value: (dolares * rate.buy).toFixed(2)
        }));
        setConverteredToPesos(conversion);
    };
    return (
        <>
            <div>
                <h2>Convertidor</h2>
                <div>
                    <input type="number"
                        placeholder="Ingrese Pesos"
                        value={pesos}
                        onChange={(e) => setPesos(e.target.value)} />
                    <button onClick={handleConverterToDolar}>Convertir a U$D</button>
                </div>

                <div>
                    <table>
                        <tbody>
                            {converteredToUSD.map((conversion, index) => (
                                <tr key={index}>
                                    <td>{conversion.type}</td>
                                    <td>{conversion.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <input type="number"
                        placeholder="Ingrese Dolares"
                        value={dolares}
                        onChange={(e) => setDolares(e.target.value)}
                    />
                    <button onClick={handleConverterToPesos}>Convertir a Pesos</button>
                    <table>
                        <tbody>
                            {converteredToPesos.map((conversion, index) => (
                                <tr key={index}>
                                    <td>{conversion.type}</td>
                                    <td>{conversion.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Converter;
