
import * as actionType from '../actions/actionTypes'
import {updateObject}  from '../../shared/utility'


const initialState = {
  cityweather: [],
  viewAll: true,
  mesg: '',
  temp: 'celcius',
  citySelected: ''
}



const getWeather = (state, payload) => {
  return updateObject(state, {
    cityweather: state.cityweather.concat(payload),
    mesg: ''
  })
}

const invalidCity = (state, payload) => {
  return updateObject(state, {
    ...payload
  })

}

const viewAll = (state, payload) => {
  return updateObject(state, {
    viewAll: !state.viewAll,
    citySelected: payload
  })
}

const changeTemp = (state, payload) => {
  return updateObject(state, {
    temp: payload
  })
}


const weatherState = (state = initialState, action) => {
  switch(action.type){
    case (actionType.GET_CITY_WEATHER): return getWeather(state, action.payload);
    case (actionType.INVALID_CITY): return invalidCity(state, action.payload);
    case (actionType.VIEW_ALL): return viewAll(state, action.payload)
    case (actionType.CHANGE_TEMP): return changeTemp(state, action.temp)
  default: return state
  }
}

export default weatherState
