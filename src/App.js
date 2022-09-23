import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Enter Your Name")
  const [partner, setPartner] = useState("Enter Your Partner's Name")
  const [output, setOutput] = useState("")

  function calculate() {
   const combinedNames = name + partner;
   const lowerNames = combinedNames.toLowerCase()
   const t = lowerNames.split("t").length - 1;
   const r = lowerNames.split("r").length - 1;
   const u = lowerNames.split("u").length - 1;
   const e1 = lowerNames.split("e").length - 1;
   let firstDigit = t + r + u + e1
   if (firstDigit < 5) {
       firstDigit = firstDigit + 5;
   }
   const l = lowerNames.split("l").length - 1;
   const o = lowerNames.split("o").length - 1;
   const v = lowerNames.split("v").length - 1;
   const e2 = lowerNames.split("e").length - 1;
   const secondDigit = l + o + v + e2
   const lovePercentage = firstDigit + '' + secondDigit;
   setOutput(lovePercentage)
  }

  return (
    <div className="App">
          <h1>Love Calculator</h1>
          <input onChange={(e) => setName(e.target.value)}/>
          <input onChange={(e) => setPartner(e.target.value)}/>
          <button onClick={calculate}>Calculate</button>
          <h1>{output}</h1>
    </div>
  );
}

export default App;
