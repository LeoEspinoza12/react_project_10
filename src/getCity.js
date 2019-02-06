import axios from 'axios'
import tzLookUp from 'tz-lookup'
import moment from 'moment'
import timezone from 'moment-timezone'

const getCity = (cityName) => {

  const weatherApi = 'd30dac624e8cc237cadaf5638568fb72'
  const url = 'http://api.openweathermap.org/'
  const path = 'data/2.5/weather'
  const city = '?q=' + cityName
  
  
  axios.get(url + path + city + `&APPID=${weatherApi}`)
    .then(res=>{
        const cityForecast = {
          current: {
            city: cityName,
            countryCode:  res.data.sys.country,
            localTime: localTime(res.data.coord.lat, res.data.coord.lon),
            currentTemp: {
              cel: celciusConverter(res.data.main.temp),
              fah: farenheitConverter(res.data.main.temp)
            },
            desc: res.data.weather[0].description
          },
          weatherDesc: {
            left: {
              sunrise: sunRiseSunSet(res.data.coord.lat, res.data.coord.lon, res.data.sys.sunrise),
              low: {
                cel: celciusConverter(res.data.main.temp_min),
                fah: farenheitConverter(res.data.main.temp_min)
              },
              humidity: res.data.main.humidity,
              longitude: res.data.coord.lon,
              wind: res.data.wind.deg,
              visibility: res.data.visibility,
            },
            right: {
              sunset: sunRiseSunSet(res.data.coord.lat, res.data.coord.lon, res.data.sys.sunset),
              high: {
                cel: celciusConverter(res.data.main.temp_max),
                fah: farenheitConverter(res.data.main.temp_max)
              },
              pressure: res.data.main.pressure / 338.639,
              latitude: res.data.coord.lat,
              windSpeed: res.data.wind.speed,
              gendesc: res.data.weather[0].description,
            }
          }
        }

      console.log(cityForecast)

    })
    .catch(err=>{
      if(err.response){
        const mesg = 'Please enter a valid city name';
        return mesg
      }
    })
  }

export default getCity


const sunRiseSunSet = (lat, long, sunTime) => {
  const coords = tzLookUp(lat, long)
  const timeDiff = moment().tz(coords).parseZone().utcOffset()/60
  console.log('countryDif', timeDiff)

  const timeNow = new Date();
  const currentTimeZoneOffsetInHours = timeNow.getTimezoneOffset()/60;
  console.log('userDif', currentTimeZoneOffsetInHours)

  const a = currentTimeZoneOffsetInHours * 60 * 60 * 1000
  const b = timeDiff*60*60*1000

  return moment(sunTime*1000+a+b).format('hh:mm a')

}


const celciusConverter = (val) => {
  const celStdVal = val - 273.15
  return Math.round(celStdVal)
}

const farenheitConverter = (val) => {
  const initVal = val - 273.15
  const fahStdVal = 1.8 * initVal + 32
  return Math.round(fahStdVal)
}

const localTime = (lat, long) => {
  const countryZone = tzLookUp(lat, long)
  return moment().tz(countryZone).format('h:mm:ss a')
  
}




// axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=4884509&appid=${api}`)
// axios.get(`https://api.forecast.io/forecast/da3caf5bca037c333604fdc434540dac/37.8267,-122.4233`)