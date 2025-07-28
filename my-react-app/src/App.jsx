import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('Home') // <-- Gjør denne dynamisk
  const [equation, setEquation] = useState("= ")

  if (currentPage === 'Home') {
    return (
      <>
        <h1>Built using React.js</h1>
        <h2>og noen Youtube Tutorials :)</h2>
        <div className="card">
          <button onClick={() => setCurrentPage('Calculator')}>
            Calculator
          </button>
          <button onClick={() => setCurrentPage('Weather')}>
            Weather
          </button>
        </div>
        <h3 class="author">by Elias Tverfjell</h3>
      </>
    )
  } else if (currentPage === 'Calculator') {
    return (
      <>
        <h1 class="currenttool">Calculator</h1>
        <div className="card">
          <button className="homebutton" onClick={() => setCurrentPage('Home')}>
            Home
          </button>
        </div>
        <div className="Calculator">
          <h1 class="calculator-output">{equation}</h1>
          <button onClick={() => setEquation(equation + "1")} className="calculator-1">1</button>
          <button onClick={() => setEquation(equation + "2")} className="calculator-2">2</button>
          <button onClick={() => setEquation(equation + "3")} className="calculator-3">3</button>
          <button onClick={() => setEquation(equation + "4")} className="calculator-4">4</button>
          <button onClick={() => setEquation(equation + "5")} className="calculator-5">5</button>
          <button onClick={() => setEquation(equation + "6")} className="calculator-6">6</button>
          <button onClick={() => setEquation(equation + "7")} className="calculator-7">7</button>
          <button onClick={() => setEquation(equation + "8")} className="calculator-8">8</button>
          <button onClick={() => setEquation(equation + "9")} className="calculator-9">9</button>
          <button onClick={() => setEquation(equation + "0")} className="calculator-0">0</button>
          <button
            className="calculator-submit"
            onClick={() => {
              try {
                const expr = equation.slice(1).trim();
                const result = Function(`"use strict"; return (${expr})`)();
                setEquation(`= ${result}`);
              } catch {
                setEquation("= Error");
              }
            }}
          >=</button>

          <button onClick={() => equation.length > 2 && setEquation(equation.slice(0, -1))} className="calculator-backspace">←</button>
          <button onClick={() => setEquation(equation + "+")} className="calculator-add">+</button>
          <button onClick={() => setEquation(equation + "-")} className="calculator-subtract">-</button>
          <button onClick={() => setEquation(equation + "*")} className="calculator-multiply">*</button>
          <button onClick={() => setEquation(equation + "/")} className="calculator-divide">/</button>
        </div>
      </>
    )
  } else if (currentPage === 'Weather') {
    return (
      <>
        <h1 class="currenttool">Weather</h1>
        <div className="card">
          <button className="homebutton" onClick={() => setCurrentPage('Home')}>
            Home
          </button>
        </div>
      </>
    )
  }

  return null
}

export default App
