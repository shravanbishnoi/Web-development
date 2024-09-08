import React, { useState } from "react";

function Calculator() {
    const [values, setValues] = useState({ first: 0.0, second: 0.0 });
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: parseFloat(value) || 0.0,
        }));
    };

    const Add = () => setMsg(`a + b = ${values.first + values.second}`);
    const Subtract = () => setMsg(`a - b = ${values.first - values.second}`);
    const Multiply = () => setMsg(`a * b = ${values.first * values.second}`);
    const Divide = () => setMsg(values.second !== 0 ? `a ÷ b = ${values.first / values.second}` : "Cannot divide by zero!");

    return (
        <div>
            <label>Enter a: </label>
            <input 
                type="number"
                name="first"
                step="1"
                value={values.first}
                onChange={handleChange}
                style={{ marginRight: "10px" }} 
            />
            <br />
            <label>Enter b: </label>
            <input 
                type="number"
                name="second"
                step="1"
                value={values.second}
                onChange={handleChange}
                style={{ marginRight: "10px" }} 
            />
            <br />
            <br />
            <button onClick={Add} style={{ marginRight: "20px" }}>+</button>
            <button onClick={Subtract} style={{ marginRight: "20px" }}>-</button>
            <button onClick={Multiply} style={{ marginRight: "20px" }}>*</button>
            <button onClick={Divide} style={{ marginRight: "20px" }}>÷</button>
            <br />
            <br />
            {msg && <p>{msg}</p>}
        </div>
    );
}

export default Calculator;
