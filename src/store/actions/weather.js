import * as actionTypes from './actionTypes'
import axios from 'axios'
import {myApi, getWeatherUrl, getForecastUrl} from '../../config/config'
import {getDataWeather, getDailyForecast}from '../../shared/weatherData'
import {updateObject} from '../../shared/utility'

// get the data from the source
export const getWeather = (cityName) => dispatch => {
   const weatherUrl = getWeatherUrl+cityName

   // get the weather
   axios.get(weatherUrl + `&APPID=${myApi}`)
     .then(res => {
       const cityForecast = getDataWeather(res.data, cityName)
       
       if(res.status === 200){

        // get daily forecast url
         const dailyForecastUrl = getForecastUrl + res.data.id + `&APPID=${myApi}`
         axios.get(dailyForecastUrl)
          .then(res => {
          const foreCast = updateObject(cityForecast, getDailyForecast(res.data.list))
          dispatch({
            type: actionTypes.GET_CITY_WEATHER,
            payload: foreCast
           })
          })
          .catch(err => {
            dispatch(error())
          })
       }

     })
     .catch(err => {
       if(err){
         dispatch(error())
       }
     })
}


// return error message if the city is invalid
const error = () => {
  return {
    type: actionTypes.INVALID_CITY,
    payload: {
      mesg: 'Invalid city name!'
    }
  }
}

// change temp metric
export const changeTemp = (temp) => {
  return {
    type: actionTypes.CHANGE_TEMP,
    temp: temp
  }
}

export const deleteCity = (city) => {
  return {
    type: actionTypes.DELETE_CITY,
    payload: city
  }

}

// view weather in details
export const viewAll = (cityWeather) => {
  return {
    type: actionTypes.VIEW_ALL,
    payload: cityWeather
  }
}
