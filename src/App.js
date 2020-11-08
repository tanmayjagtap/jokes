import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Mode from './Components/Mode/Mode';
import Select from './Components/Select/Select';
import Smile from './Components/Smile/Smile';

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      output: '',
      type: 'null',
      mode: '0'
    }
  }
  onGo = () => {
    const display = document.getElementById('display');
    display.classList.remove('display');
    if (this.state.type === 'null') {
      alert('Please Select type')
    }
    else {
      fetch(`https://sv443.net/jokeapi/v2/joke/${this.state.type}`)
        .then(res => res.json())
        .then(joke => this.setState({ output: joke }))
    }

  }
  onInputChange = () => {
    this.setState({mode:!this.state.mode})
    if (this.state.mode) {
      const body = document.querySelector('body');
      body.style.background = 'black';
      body.style.color = 'white';
    }
    else {
      const body = document.querySelector('body');
      body.style.background = 'linear-gradient(to right, #ff19dd, #6ff9ff)';
      body.style.color = 'black';
    }
  }

  genre = (event) => {
    this.setState({ type: event.target.value })
    // console.log(event.target.value);
  }
  render() {
    const { setup, delivery } = this.state.output;
    return (
      <div className="App">
        <Particles
          params={particlesOptions} className='particles' />
        <Mode onInputChange={this.onInputChange} />
        <Select onGo={this.onGo} genre={this.genre} />
        <Smile setup={setup} delivery={delivery} />
      </div>
    );
  }
}

export default App;
