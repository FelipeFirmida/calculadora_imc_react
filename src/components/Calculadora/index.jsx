import { useState } from "react";

import './index.css'

function Calcular() {

    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleAlturaChange = (e) => setAltura(e.target.value);
    const handlePesoChange = (e) => setPeso(e.target.value);
    
    const [imc, setImc] =  useState(null);

    const calcularIMC = () => {
        const alturaEmMetros = altura / 100;
        const imcValue = peso / (alturaEmMetros ** 2);
        setImc(imcValue);
    };

    return (
        <div className="calc-container">
            <input className="input"
            type="number"
            value={altura}
            onChange={handleAlturaChange}
            placeholder="Sua altura em cm"
            />
            <input className="input"
            type="number"
            value={peso}
            onChange={handlePesoChange}
            placeholder="Seu peso em quilos"
            />
            <button className="btn" onClick={calcularIMC}>Calcular IMC</button>
            {imc && (
                <p>
                    Seu IMC é de {imc.toFixed(2)} e você está {' '}
                    {imc <18.5
                    ? 'abaixo do peso'
                    : imc <= 24.9
                    ? 'no peso adequado'
                    : imc <= 29.9
                    ? 'com sobrepeso'
                    : imc <= 34.9
                    ? 'com obesidade grau I'
                    : imc <= 39.9
                    ? 'com obesidade grau II'
                    : 'com obesidade grau III'}
                </p>
            )}
        </div>
    )};

export default Calcular