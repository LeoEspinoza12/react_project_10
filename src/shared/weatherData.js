import {
  localTime,
  sunRiseSunSet,
  celciusConverter,
  farenheitConverter
} from './utility'



const getDataWeather = (data, cityName) => {

  const cityForecast = {
    current: {
      city: cityName,
      countryCode: data.sys.country,
      localTime: localTime(data.coord.lat, data.coord.lon),
      currentTemp: {
        cel: celciusConverter(data.main.temp),
        fah: farenheitConverter(data.main.temp)
      },
      desc: data.weather[0].description
    },
    weatherDesc: {
      left: {
        sunrise: sunRiseSunSet(data.coord.lat, data.coord.lon, data.sys.sunrise),
        low: {
          cel: celciusConverter(data.main.temp_min),
          fah: farenheitConverter(data.main.temp_min)
        },
        humidity: data.main.humidity,
        longitude: data.coord.lon,
        wind: data.wind.deg,
        visibility: data.visibility,
      },
      right: {
        sunset: sunRiseSunSet(data.coord.lat, data.coord.lon, data.sys.sunset),
        high: {
          cel: celciusConverter(data.main.temp_max),
          fah: farenheitConverter(data.main.temp_max)
        },
        pressure: data.main.pressure / 338.639,
        latitude: data.coord.lat,
        windSpeed: data.wind.speed,
        gendesc: data.weather[0].description,
      }
    }
  }
  return cityForecast
}

export default getDataWeather