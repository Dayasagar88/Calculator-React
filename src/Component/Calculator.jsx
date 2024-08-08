import React, { useState } from "react";
import DisplayScreen from "./DisplayScreen";
import Inputs from "./Inputs";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleValueChange = (newValue) => {
    if (value === "Error") {
      setValue(newValue);
    } else {
      setValue((prevValue) => prevValue + newValue);
    }
  };

  const handleResult = () => {
    try {
      if(value === "Error"){
        setValue("")
      }
      const result = eval(value.replace(/×/g, "*").replace(/÷/, "/"));
      if (result !== undefined) {
        setValue(result.toString());
      }
    } catch (e) {
      setValue("Error");
    }
  };

  const handleRemove = () => {
    if(value !== ""){
      setValue(value.slice(0, -1))
    }
  }

  return (
    <div className="sm:w-[20rem] sm:h-auto w-[100vw] h-[100vh] rounded-xl overflow-hidden">
      {/* 
            - Main container
             - calculator
              - Display screen
              - Number buttons
              - Operation buttons
        */}

      <DisplayScreen receivedValue={value} />
      <Inputs
        setValue={handleValueChange}
        clearValues={setValue}
        removeValue={handleRemove}
        setResult={handleResult}
      />
    </div>
  );
};

export default Calculator;
