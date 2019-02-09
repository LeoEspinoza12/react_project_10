import React from 'react';
import {connect} from 'react-redux'
import Dashboard from './containers/dashboard'
import WeatherDashboard from './containers/weatherDashboard'
import './App.css';

const App = (props) => {
    return (
      <div className="App">
        <div className="Main">
          {props.view === 'all' ? 
            <WeatherDashboard /> : <Dashboard />}
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default connect(mapStateToProps)(App);
