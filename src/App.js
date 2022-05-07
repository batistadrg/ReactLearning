import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


const eventFn = () => {
  console.log("h1 clicado")


}



function App () {
  const [counter, setCounter] = useState(0)


  //componenDidUpdate - executa toda vez que o component atualiza

  useEffect(()=> {
    console.log("componentDidUpdate")

  })


  //componenDidMount - executa 1x

  useEffect(()=> {
    console.log("componentDidMount")

  }, []) // como passamos um array de dependencias vazio, ele executa apenas 1x


  //Com dependencia - executa quando a dependencia mudar

  useEffect(()=> {
    console.log("Contador mudou para",counter)

  }, [counter]) // repare que passamos counter como dependencia





    useEffect(()=> {
      document.querySelector("h1")?.addEventListener("click", eventFn); //JS puro
      // ? Encadeamento opcional. Caso haja o componente h1, o que esta depois da virgula sera executado. Caso nao, nao sera.
    

      // componentWillUnmount - Serve para limpar os lixos da pagina
    return () => {
      document.querySelector("h1")?.removeEventListener("click", eventFn);
    }
    
    }, []) 


//lifecyclemethotds

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={()=> setCounter(counter+1)}>+</button>
    </div>
  )

}

export default App;
