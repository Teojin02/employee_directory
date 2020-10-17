import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) {
      this.state = {
        People: [
          {Name:"Dwight", role:"Manager"},
          {Name:"Jim", role:"Sales"},
          {Name:"Pam", role:"Sales"},
          {Name:"Stanley", role:"Sales"},
          {Name:"Phylis", role:"Sales"}
        ]
        SearchEmployees: ''
      }
    }
  }
  render () {
    return (
      <div className="App">
        <h1>Employees</h1>
      </div>
    )
  }

}

export default App;
