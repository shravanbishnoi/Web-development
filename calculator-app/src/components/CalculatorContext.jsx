import { createContext, useContext, useState } from 'react';
import { evaluate } from 'mathjs';

// Create a context
const CalculatorContext = createContext();

// Create a provider to wrap the App
export function CalculatorProvider({ children }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [finalResult, setFinalResult] = useState("");

  const handleButtonClick = (value) => {
    // Handle final result if present
    if (finalResult !== "") {
      if (["+", "-", "*", "÷"].includes(value)) {
        setDisplayValue(finalResult + value);
        setPreviousValue(value);
        setFinalResult("");
        return;
      } else if (value !== "=") {
        setFinalResult("");
      } else {
        return;
      }
    }
  
    if (value === "AC") {
      setDisplayValue("0");
      setPreviousValue(null);
      setFinalResult("");
    } else if (value === "=") {
      try {
        // Replace ÷ with / for correct mathjs evaluation
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
    <CalculatorContext.Provider
      value={{ displayValue, finalResult, handleButtonClick }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

// Custom hook to use the context
export const useCalculator = () => useContext(CalculatorContext);
