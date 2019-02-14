import React, {useState} from 'react'
import * as action from '../../store/actions/index'
import moment from 'moment'
import {connect} from 'react-redux'

const InputArea = (props) => {

   const [city, getCity] = useState('')

   const getCityVal = (e) => {
     getCity(e.target.value)
   }

   const addCity = () => {
     props.getCityWeather(city)
     getCity('')
   }


  return (
    <React.Fragment>
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
          <small>{
            props.mesg ? props.mesg : moment(new Date()).format('LL')}</small>
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { mesg: state.mesg }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { getCityWeather: (country)=>{dispatch(action.getWeather(country))} }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputArea)