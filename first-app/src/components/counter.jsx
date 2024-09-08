import React, {useState} from "react";

function Counter() {
    const [num, SetNum] = useState(0)

    const increament = () => {
        SetNum(num + 1)
    }
    const decreament = () => {
        SetNum(num - 1)
    }
    const reset = () => {
        SetNum(0)
    }

    return (
        <div>
            <h2>Counter: </h2>
            <button onClick={decreament} style={{ marginRight: "10px" }}>-</button>
            <span style={{ marginRight: "10px" }}>{num}</span>
            <button onClick={increament} style={{ marginRight: "10px" }}>+</button>
            <button onClick={reset} style={{ marginRight: "10px" }}>Reset</button>
        </div>
    )
}

export default Counter