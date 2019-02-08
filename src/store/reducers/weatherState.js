
import * as actionType from '../actions/actionTypes'
import {updateObject}  from '../../shared/utility'


const initialState = {
  cityweather: []
}



const getWeather = (state, payload) => {
  return updateObject(state, {
    cityweather: state.cityweather.concat(payload)
  })
}


const weatherState = (state = initialState, action) => {
  switch(action.type){
    case (actionType.GET_CITY_WEATHER): return getWeather(state, action.payload);
  default: return state
  }
}

export default weatherState