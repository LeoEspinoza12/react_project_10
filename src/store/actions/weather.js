import * as actionTypes from './actionTypes'
import axios from 'axios'
import {myApi, getWeatherUrl, getForecastUrl} from '../../config/config'
import {getDataWeather, getDailyForecast}from '../../shared/weatherData'
import {updateObject} from '../../shared/utility'

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

const error = () => {
  return {
    type: actionTypes.INVALID_CITY,
    payload: {
      mesg: 'Invalid city name!'
    }
  }
}


export const viewAll = () => {
  return {
    type: actionTypes.VIEW_ALL,
  }
}