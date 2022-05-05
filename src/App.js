import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App () {
  const [reverse, setReverse] = useState(false);
  const [contador, setContador] = useState(0)
  const reverseClass = reverse ? 'reverse' : ''

  const handleClick = () => {
    setContador(contador+1)
    setReverse(!reverse)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {contador}</h1>
        <button 
        type="button"
        onClick = {handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  )

}

export default App;
