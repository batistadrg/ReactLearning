import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
    //bind necessario para uma funcao usar o state

    this.state = {

      reverse: false
    }
  }


  handleClick(){
    const {reverse} = this.state;
    this.setState({reverse: !reverse})
  }

  render(){
    const {reverse} = this.state
    const reverseClass = reverse ? 'reverse' : '';

    /*reverseClass eh uma variavel que recebe a seguinte condicional:
      se reverse for verdadeiro ? retorne 'verse' : se nao, retorne ''
    */
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button 
          type="button"
          onClick = {this.handleClick}>
            Reverse {reverseClass}
          </button>
        </header>
      </div>
    )
  }
}

export default App;
