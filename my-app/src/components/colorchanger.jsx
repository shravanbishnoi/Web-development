import React, { useState } from "react";

function ColorChanger() {
    const [bgColor, setBgColor] = useState("#ffffff");

    const changeColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
        document.body.style.backgroundColor = randomColor;
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
            <button onClick={changeColor} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
                Change Background Color
            </button>
        </div>
    );
}

export default ColorChanger;
