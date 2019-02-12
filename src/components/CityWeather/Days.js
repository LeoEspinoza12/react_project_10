import React from 'react'
import {connect} from 'react-redux'


const Days = (props) => {
  
const iconUrl = 'http://openweathermap.org/img/w/'

  let days = props.city.dailyForecast.map(day=>{
      return <div
            key={day.day} >
            <h5>{day.day}</h5>
            <div className="img">
              <img src={iconUrl+day.icon+'.png'} alt="" />
            </div>
            <div className="dailyTemp">
              <small>{props.temp === 'celcius' ? 
                      day.highTemp.cel : 
                      day.highTemp.fah}&#176;</small> {' '}
              <small>{props.temp === 'celcius' ? 
                      day.lowTemp.cel : 
                      day.lowTemp.fah}&#176;</small>
            </div>
          </div>
  })


  return (
    <React.Fragment>
         { /* middle part */ }
      <div className="MidSection">
        <div className="SectionDiv">
          {days}
        </div>
      </div>

    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.citySelected,
    temp: state.temp
  }
}
export default connect(mapStateToProps)(Days)