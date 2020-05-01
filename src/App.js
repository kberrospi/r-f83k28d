import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    contador: 0
  }
  
   contar=()=>{
    this.setState({
      contador: this.state.contador + 1
    });
  }
  


  render() {
    return (
      <div>
        <span className="value">{this.state.contador}</span>
        <button id="inc" onClick={this.contar} >Incrementa</button>
      </div>
    );
  }
}

export default App;
