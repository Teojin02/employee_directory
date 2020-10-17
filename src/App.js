import React from 'react';
import './App.css';
import { Component } from 'react';
import EmployeeList from './EmployeeList';
import SearchBox from './SearchBox';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      employees: [
        {name:"Dwight", position:"Manager"},
        {name:"Pam" , position:"Sales"},
        {name:"Jim" , position:"Sales"},
        {name:"Phyilis" , position:"Sales"},
        {name:"Stanley" , position:"Sales"}
      ],
      searchEmployee:''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({searchEmployee: e.target.value })
  }
  render () {
    let filteredEmployees = this.state.employees.filter((Employee) =>{
      return Employee.name.toLowerCase().includes(this.state.searchEmployee.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Dunder Mifflin Employee's </h1>
        <SearchBox handleInput={this.handleInput}/>,
        <EmployeeList filteredEmployees={filteredEmployees}  />
      </div>
    );
  }
}
export default App;
