import React, {useState} from 'react';
import {connect} from 'react-redux'
import * as action from '../store/actions/index'

const Dashboard = (props) => {

  const [city, getCity] = useState('')

  

  const getCityVal = (e) => {getCity(e.target.value)}

  const addCity = () => {
    props.getCityWeather(city)
    getCity('')
  }
    
  console.log(props.forecast)
  return (
    <React.Fragment>
      <div className="container">
        {/* input */}
        <div className="input-group mb-3 InputArea">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter city name" 
            value={city}
            onChange={(e)=>getCityVal(e)}
            />
          <div className="input-group-append">
            <button 
              className="btn btn-outline-secondary" 
              onClick={addCity}
              >Add</button>
          </div>
        </div>
        {/* message */}
        <div className="Message">
          <small>Invalid city name!</small>
        </div>
        {/* list of cities */}
        <div className="list-group list-group-flush ListOfCity">
          <li className="list-group-item">
            <div className="MainCity"
              onClick={props.click}>
              <small>7:03 am</small>
              <h5>Province of Cebu</h5>
            </div>
            <div className="MainTemp">
              <h5>21&#176;</h5>
            </div>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">x</span>
            </button>
          </li>
          <li className="list-group-item">
            <div className="MainCity">
              <small>12:05 pm</small>
              <h5>Chicago</h5>
            </div>
            <div className="MainTemp">
              <h5>-16&#176;</h5>
            </div>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">x</span>
            </button>
          </li>
          <li className="list-group-item">
            <div className="MainCity">
              <small>18:06 am</small>
              <h5>Madagascar</h5>
            </div>
            <div className="MainTemp">
              <h5>16&#176;</h5>
            </div>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">x</span>
            </button>
          </li>
          <li className="list-group-item">
            <div className="MainCity">
              <small>11:57 pm</small>
              <h5>Tijuana</h5>
            </div>
            <div className="MainTemp">
              <h5>12&#176;</h5>
            </div>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">x</span>
            </button>
          </li>
        </div>
        {/* footer */}
        <div className="FooterBottom">
          <div className="degrees">
            <small className='celcius'>&#176;C</small> / <small className='farenheit'>&#176;F</small>
          </div>
          <div className="MyName">
            <small>&copy; aimanski.com</small>
          </div>
          <div className="Add">
            <small>11:12am</small>
            {/* <i className="fas fa-plus-circle"></i> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    forecast: state.cityweather
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCityWeather: (country)=>{dispatch(action.getWeather(country))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

