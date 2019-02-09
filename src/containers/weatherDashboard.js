import React from 'react'

const weatherDashboard = (props) => {



  return (
    <React.Fragment>

      { /* top part */ } 
      <div className="Top">
        <div className="LogoArea">
          <img src="http://openweathermap.org/img/w/50d.png" alt=""/>
        </div>
        <div className="TopDesc">
          <button 
            type="button" 
            className="close"
            onClick={props.click}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="province">Province of Cebu</h5>
          <h5 className="country">PH</h5>
          <p className="time">Monday 12:25 pm</p>
          <h5 className="temp">16&#176;</h5>
          <p className="weatherDesk">Clear sky</p>
        </div>
      </div> 

      { /* middle part */ }
      <div className="MidSection">
        <div className="SectionDiv">
          <div>
            <h5>Mon</h5>
            <div className="img">
              <img src="http://openweathermap.org/img/w/02n.png" alt="" />
            </div>
            <div className="dailyTemp">
              <small>16&#176;</small>
              <small> -16&#176;</small>
            </div>
          </div>
          <div>
            <h5>Tue</h5>
            <div className="img">
              <img src="http://openweathermap.org/img/w/01n.png" alt="" />
            </div>
            <div className="dailyTemp">
              <small>9&#176;</small>
              <small> -32&#176;</small>
            </div>
          </div>
          <div>
            <h5>Wed</h5>
            <div className="img">
              <img src="http://openweathermap.org/img/w/09d.png" alt="" />
            </div>
            <div className="dailyTemp">
              <small>11&#176;</small>
              <small> -1&#176;</small>
            </div>
          </div>
          <div>
            <h5>Thu</h5>
            <div className="img">
              <img src="http://openweathermap.org/img/w/11d.png" alt="" />
            </div>
            <div className="dailyTemp">
              <small>-21&#176;</small>
              <small> -9&#176;</small>
            </div>
          </div>
          <div>
            <h5>Mon</h5>
            <div className="img">
              <img src="http://openweathermap.org/img/w/13d.png" alt="" />
            </div>
            <div className="dailyTemp">
              <small>-29&#176;</small>
              <small> -10&#176;</small>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="Bottom">
        <div className="BottomSection">
          <div className="left">
            <div>
              <p className="label">Sunrise</p>
              <p className="value">5.59am</p>
            </div>
            <div>
              <p className="label">Low</p>
              <p className="value">24&#176;</p>
            </div>
            <div>
              <p className="label">Humidity</p>
              <p className="value">83</p>
            </div>
            <div>
              <p className="label">Longitude</p>
              <p className="value">123.67</p>
            </div>
            <div>
              <p className="label">Wind</p>
              <p className="value">290&#176;</p>
            </div>
            <div>
              <p className="label">Visibility</p>
              <p className="value">100 mi</p>
            </div>
          </div>

          <div className="right">
            <div>
              <p className="label">Sunset</p>
              <p className="value">6:30pm</p>
            </div>
            <div>
              <p className="label">High</p>
              <p className="value">24&#176;</p>
            </div>
            <div>
              <p className="label">Pressure</p>
              <p className="value">1013</p>
            </div>
            <div>
              <p className="label">Latitude</p>
              <p className="value">9.33</p>
            </div>
            <div>
              <p className="label">Wind speed</p>
              <p className="value">3.1 mph</p>
            </div>
            <div>
              <p className="label">Gen Desc</p>
              <p className="value">Clear sky</p>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default weatherDashboard
