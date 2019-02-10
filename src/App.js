import React from 'react';
import {connect} from 'react-redux'
import Dashboard from './containers/dashboard'
import WeatherDashboard from './containers/weatherDashboard'
import './App.css';

const App = (props) => {
    return (
      <div className="App">
        <div className="Main">
          {props.viewAll ? <Dashboard/> : <WeatherDashboard /> }
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewAll: state.viewAll
  }
}
export default connect(mapStateToProps)(App);
