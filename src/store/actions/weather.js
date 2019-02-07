import * as actionTypes from './actionTypes'
import axios from 'axios'
import {myApi, getWeatherUrl} from '../../config/config'
import weatherData from '../../shared/weatherData'

export const getWeather = (cityName) => dispatch => {
   const url = getWeatherUrl+cityName
   axios.get(url + `&APPID=${myApi}`)
     .then(res => {
       dispatch({
         type: actionTypes.GET_CITY_WEATHER,
         payload: weatherData(res.data, cityName)
        })
     })
     .catch(err => {
       console.log('error', err)
      //  if (err.response) {
      //    const mesg = 'Please enter a valid city name';
      //    return mesg
      //  }
     })
}