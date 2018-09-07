import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Counter',
      counter: 10,
    }

  }

  plus(){
    console.log('PLUS');
    this.setState({counter: this.state.counter + 1})
  }
  minus(){
    //console.log('MINUS');
    this.setState({counter: this.state.counter - 1})
  }

  render(){
    console.log('Render');
    return (
      <div className = 'App' >
      {this.state.title}:
    {this.state.counter}
    <button onClick={ () => this.plus() }> plus </button>
        <button onClick={ () => this.minus() }> minus </button>
      </div>)

    }
}

export default App;
