import React from 'react'

const Forecast = () => {


  return (
    <React.Fragment>
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
export default Forecast
