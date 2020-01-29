import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
      .then(employees => employees.json())
      .then(employees => {
        console.log(employees)
        this.setState({
          employees: employees
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App Container">
        <h1> Sogeti Employee Directory </h1>
        <div className="row">
          {this.state.employees.map((employees, index) => {
              return (
                <div className="card">
                  <img src={employees.image} className="card-img-top directory-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{employees.name}</h5>
                    <p className="card-text">{employees.location}</p>
                    <a href="#" className="btn btn-primary">Go somewhere without last name</a>
                  </div>
                </div> )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
