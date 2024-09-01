import React, {useState} from "react";

function ToggleButton() {
    const [IsOn, SetIsOn] = useState(false)

    const toggle = () => {
        SetIsOn(!IsOn)
    }

    return (
        <div>
            <button onClick={toggle}>{IsOn ? "ON" : "OFF"}</button>
        </div>
    )
}
export default ToggleButton