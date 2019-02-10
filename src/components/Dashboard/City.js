import React from 'react'
import * as action from '../../store/actions/index'
import {connect} from 'react-redux'

const City = (props) => {



let city = null
if(props.cityWeather.length !== 0){
  city = props.cityWeather.map((weather, i)=>{
  return <li 
          key={i}
          className="list-group-item">
          <div className="MainCity"
              onClick={props.view}
              >
          <small>{weather.current.localTime}</small>
          <h5>{weather.current.city}</h5>
        </div>
        <div className="MainTemp">
          <h5>{props.temp === 'celcius' ? 
                weather.current.currentTemp.cel : 
                weather.current.currentTemp.fah}&#176;</h5>
        </div>
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">x</span>
        </button>
      </li> 

  })
} else {
  city =<li className="list-group-item noCity">
          <h5>No city selected.</h5>
        </li> 
}

  return (
    <React.Fragment>
       <div className="list-group list-group-flush ListOfCity">
          {city}
        </div>
    </React.Fragment>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    cityWeather: state.cityweather,
    temp: state.temp,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    view: () => {dispatch(action.viewAll())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
