import React, {useState} from "react";
import Greet from "./welcomePage";
import ToggleButton from "./toggle";
import Counter from "./counter";
import ColorChanger from "./colorchanger";
import Converter from "./tempconverter";
import Calculator from "./calculator";

function MainPage() {
    const [selectedComponent, setSelectedComponent] = useState(null)

    const renderComponent = () => {
        switch (selectedComponent) {
            case "Toggle":
                return <ToggleButton />
            case "Counter":
                return <Counter />
            case "ColorChanger":
                return <ColorChanger />
            case "Converter":
                return <Converter />
            case "Calculator":
                return <Calculator />
            default:
                return <Greet name="Shravan" />
        }
    }

    return (
        <div>
            <button onClick={() => setSelectedComponent("Toggle")} style={{ marginRight: "20px" }}>Toggle Button</button>
            <button onClick={() => setSelectedComponent("Counter")} style={{ marginRight: "20px" }}>Counter</button>
            <button onClick={() => setSelectedComponent("ColorChanger")} style={{ marginRight: "20px" }}>BG color change</button>
            <button onClick={() => setSelectedComponent("Converter")} style={{ marginRight: "20px" }}>Temperature Converter</button>
            <button onClick={() => setSelectedComponent("Calculator")} style={{ marginRight: "20px" }}>Calculator</button>
            <div style={{ marginTop: "20px" }}>
                {renderComponent()}
            </div>
        </div>
    )
}

export default MainPage 
