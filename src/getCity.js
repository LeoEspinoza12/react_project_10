import axios from 'axios'
import tz from 'tz-lookup'
import moment from 'moment'
import timezone from 'moment-timezone'

const getCity = (cityName) => {

  const weatherApi = 'd30dac624e8cc237cadaf5638568fb72'
  const googleApi = ''
  const url = 'http://api.openweathermap.org/'
  const path = 'data/2.5/weather'
  const city = '?q=' + cityName
  
  
  axios.get(url + path + city + `&APPID=${weatherApi}`)
    .then(res=>{
        const cityForecast = {
          current: {
            city: cityName,
            countryCode:  res.data.sys.country,
            localTime: 'localtimeHere',
            currentTemp: {
              cel: celciusConverter(res.data.main.temp),
              fah: farenheitConverter(res.data.main.temp)
            },
            desc: res.data.weather[0].description
          },
          weatherDesc: {
            left: {
              sunrise: new Date(res.data.sys.sunrise * 1000),
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
              sunset: new Date(res.data.sys.sunset * 1000),
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

  // axios.asdfasdfadfs


        let api = 'AIzaSyC5RrcE9xZ4OrgLeHmiU9DJg5LL3nqfIqw'
        let lon = cityForecast.weatherDesc.left.longitude
        let lat = cityForecast.weatherDesc.right.latitude
        let date = new Date().getTime()
        console.log(lat, lon)

        // console.log(tz(lat, lon, date))

        // console.log()
        let sample = `https://maps.googleapis.com/maps/api/timezone/json?location=9.33,12.67&timestamp=1549264747624&key=AIzaSyC5RrcE9xZ4OrgLeHmiU9DJg5LL3nqfIqw`
        // axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${date}&key=${api}`)
        //   .then(res => {
        //       console.log(res.data)
        //   }).catch(err => {
        //       console.log(err)
        //   })



        // console.log(res.data)
      // create Date object for current location
      // var date = new Date();

      // // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
      // var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);

      // console.log('time', utcTime)
      // // time offset for New Zealand is +12
      // var timeOffset = 10;

      // // create new Date object for a different timezone using supplied its GMT offset.
      // var NewZealandTime = new Date(utcTime + (3600000 * timeOffset));

      // console.log(NewZealandTime)


    })
    .catch(err=>{
      if(err.response){
        const mesg = 'Please enter a valid city name';
        return mesg
      }
    })
  }

export default getCity



const celciusConverter = (val) => {
  const celStdVal = val - 273.15
  return Math.round(celStdVal)
}

const farenheitConverter = (val) => {
  const initVal = val - 273.15
  const fahStdVal = 1.8 * initVal + 32
  return Math.round(fahStdVal)
}





// axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=4884509&appid=${api}`)
// axios.get(`https://api.forecast.io/forecast/da3caf5bca037c333604fdc434540dac/37.8267,-122.4233`)