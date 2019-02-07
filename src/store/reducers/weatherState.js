
import * as actionType from '../actions/actionTypes'



const initialState = {
  sample: true
}



const getWeather = (state, payload) => {
  console.log('getWeather', payload)
}


const weatherState = (state = initialState, action) => {
  switch(action.type){
    case (actionType.GET_CITY_WEATHER): return getWeather(state, action.payload);
  default: return state
  }
}

export default weatherState