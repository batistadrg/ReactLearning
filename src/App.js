import logo from './logo.svg';
import P from "prop-types"
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';




// React.memo serve para memorizar o componente caso ele nao mude, caso ele mude, ela muda tambem

const Button = React.memo(function Button({incrementButton}) {
  console.log("Filho renderizou")
  return <button onClick={() => incrementButton(10)}>+</button>
}) // component chamado Button


Button.propTypes = {
  incrementButton: P.func,
};


function App () {
  const [counter, setCounter] = useState(0)

  // Serve para recriar a funcao apenas se a dependencia mudar
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num)
    // funcao basica de callback

  }, [])

  console.log("Pai renderizou")

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter}></Button>
    </div>
  )

}

export default App;
