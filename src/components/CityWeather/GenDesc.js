import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../store/actions/index'

const GenDesc = (props) => {


  return (
    <React.Fragment>
       <div className="Top">
        <div className="LogoArea">
          <img src="http://openweathermap.org/img/w/50d.png" alt=""/>
        </div>
        <div className="TopDesc">
          <button 
            type="button" 
            className="close"
            onClick={props.view}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="province">Province of Cebu</h5>
          <h5 className="country">PH</h5>
          <p className="time">Monday 12:25 pm</p>
          <h5 className="temp">16&#176;</h5>
          <p className="weatherDesk">Clear sky</p>
        </div>
      </div> 
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    view: () => { dispatch(action.viewAll()) }
  }
}

export default connect(null, mapDispatchToProps)(GenDesc)