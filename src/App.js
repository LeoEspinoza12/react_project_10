import React, { Component } from 'react';
import Dashboard from './components/dashboard'
import WeatherDashboard from './components/weatherDashboard'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      city: '',
      dashboard: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.setState({dashboard: !this.state.dashboard})
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          {this.state.dashboard ? 
            <WeatherDashboard
              click={this.onClick}/> : 
            <Dashboard 
              click={this.onClick}/>}
        </div>
      </div>
    );
  }
}

export default App;
