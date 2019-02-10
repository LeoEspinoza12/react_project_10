import React from 'react'

const Days = () => {


  return (
    <React.Fragment>
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

    </React.Fragment>
  )
}

export default Days