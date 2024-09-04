import { useState } from 'react';
import ScreenComponent from './components/ScreenComponent';
import ButtonComponent from './components/ButtonComponent';
import { evaluate } from 'mathjs';

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [finalResult, setFinalResult] = useState("");

  const handleButtonClick = (value) => {
    if (finalResult !== "") {
      if (["+", "-", "*", "÷"].includes(value)) {
        setDisplayValue(finalResult + value);
        setPreviousValue(value);
        setFinalResult("");
        return;
      } else if (value !== "=") {
        setFinalResult("");
      } else {
        return 0;
      }
    }
  
    if (value === "AC") {
      setDisplayValue("0");
      setPreviousValue(null);
      setFinalResult("");
    } else if (value === "=") {
      try {
        const expression = displayValue.replace(/÷/g, '/');
        const result = evaluate(expression);
        setFinalResult(result.toString());
        setDisplayValue("0");
        setPreviousValue(null);
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (["+", "-", "*", "÷", "."].includes(value)) {
      if (["+", "-", "*", "÷"].includes(previousValue) && value !== ".") {
        setDisplayValue(displayValue.slice(0, -1) + value);
      } else if (value === "." && !displayValue.includes(".")) {
        setDisplayValue(displayValue + value);
      } else {
        setDisplayValue(displayValue + value);
      }
      setPreviousValue(value);
    } else {
      if ((displayValue === "0" || displayValue === "00") && value !== ".") {
        setDisplayValue(value.toString());
      } else {
        setDisplayValue(displayValue + value.toString());
      }
      setPreviousValue(value.toString());
    }
  };
  
  return (
    <>
      <h1>Calculator</h1>
      <div className="container">
        <ScreenComponent displayValue={finalResult !== "" ? finalResult : displayValue} />
        <div className="button-container">
          <ButtonComponent value={7} onClick={handleButtonClick} />
          <ButtonComponent value={8} onClick={handleButtonClick} />
          <ButtonComponent value={9} onClick={handleButtonClick} />
          <ButtonComponent value="AC" className="red-button" onClick={handleButtonClick} />
          <ButtonComponent value={4} onClick={handleButtonClick} />
          <ButtonComponent value={5} onClick={handleButtonClick} />
          <ButtonComponent value={6} onClick={handleButtonClick} />
          <ButtonComponent value="÷" onClick={handleButtonClick} />
          <ButtonComponent value={1} onClick={handleButtonClick} />
          <ButtonComponent value={2} onClick={handleButtonClick} />
          <ButtonComponent value={3} onClick={handleButtonClick} />
          <ButtonComponent value="*" onClick={handleButtonClick} />
          <ButtonComponent value="00" onClick={handleButtonClick} />
          <ButtonComponent value={0} onClick={handleButtonClick} />
          <ButtonComponent value="." onClick={handleButtonClick} />
          <ButtonComponent value="-" onClick={handleButtonClick} />
          <ButtonComponent value="=" className="bottom-row green-button" onClick={handleButtonClick} />
          <ButtonComponent value="+" className="bottom-row operations" onClick={handleButtonClick} />
        </div>
      </div>
      <div className="footer">
        <p className="moving-line">Designed & implementated by Shravan Bishnoi!</p>
      </div>
    </>
  );
}

export default App;
