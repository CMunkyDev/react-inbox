import React, { Component } from 'react';
import Inbox from './components/Inbox'
import seed from './seed.js'
import './App.css';

let labelArr = ['dev', 'personal', 'gschool']

class App extends Component {
  render() {
    return (
      <Inbox mail={seed} labelArr={labelArr}/>
    )
  }
}

export default App;
