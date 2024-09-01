import React, { useState } from "react";

function Converter() {
    const [number, setNumber] = useState(0.0);
    const [outputNum, setoutputNum] = useState(0.0);
    const [outMessage, setoutputMessage] = useState("");

    const handleChange = (e) => {
        const value = parseFloat(e.target.value);
        setNumber(isNaN(value) ? 0.0 : value);
    };

    const CelciusToFahrenheit = () => {
        let feh = (number * (9 / 5)) + 32;
        setoutputNum(feh);
        setoutputMessage(`The temperature in Fahrenheit is: ${feh.toFixed(2)}`);
    };

    const FahrenheitToCelcius = () => {
        let cel = (number - 32) * (5 / 9);
        setoutputNum(cel);
        setoutputMessage(`The temperature in Celsius is: ${cel.toFixed(2)}`);
    };

    return (
        <div>
            <label style={{ marginRight: "10px" }}>Enter the temperature: </label>
            <input
                type="number"
                step="0.01"
                value={number}
                onChange={handleChange}
                style={{ marginRight: "10px" }}
            />
            <br />
            <br />
            {outMessage}
            <br />
            <br />
            <button onClick={CelciusToFahrenheit} style={{ marginRight: "40px" }}>To Fahrenheit</button>
            <button onClick={FahrenheitToCelcius} style={{ marginRight: "10px" }}>To Celsius</button>
        </div>
    );
}

export default Converter;
