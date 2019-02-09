import React from 'react'
import moment from 'moment'

const Footer = () => {



  return (
    <React.Fragment>
      <div className="FooterBottom">
          <div className="degrees">
            <small className='celcius'>&#176;C</small> / <small className='farenheit'>&#176;F</small>
          </div>
          <div className="MyName">
            <small>&copy; aimanski.com</small>
          </div>
          <div className="Add">
            <small>{moment(new Date()).format('h:mm a')}</small>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Footer