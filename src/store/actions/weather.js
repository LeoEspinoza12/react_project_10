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
            console.log(err)
          })
       }

     })
     .catch(err => {
       console.log('error', err)
      //  if (err.response) {
      //    const mesg = 'Please enter a valid city name';
      //    return mesg
      //  }
     })
}