

import tzLookUp from 'tz-lookup'
import moment from 'moment'
import timezone from 'moment-timezone'


export const sunRiseSunSet = (lat, long, sunTime) => {
  
  // get the country utf time diff
  const coords = tzLookUp(lat, long)
  const timeDiff = moment().tz(coords).parseZone().utcOffset() / 60

  // get the user's utf time diff
  const timeNow = new Date();
  const currentTimeZoneOffsetInHours = timeNow.getTimezoneOffset() / 60;

  // convert the difference to millisec
  const a = currentTimeZoneOffsetInHours * 60 * 60 * 1000
  const b = timeDiff * 60 * 60 * 1000

  return moment(sunTime * 1000 + a + b).format('hh:mm a')
}


  // convert kelvin celcius
export const celciusConverter = (val) => {
  const celStdVal = val - 273.15
  return Math.round(celStdVal)
}

// convert kelvin to fahrenheit
export const farenheitConverter = (val) => {
  const initVal = val - 273.15
  const fahStdVal = 1.8 * initVal + 32
  return Math.round(fahStdVal)
}

// get the country localtime
export const localTime = (lat, long) => {
  const countryZone = tzLookUp(lat, long)
  return moment().tz(countryZone).format('h:mm a')

}

// updates the state
export const updateObject = (oldObject, newObject) => {
   return {
    ...oldObject,
    ...newObject
  }
}

export const visibilityCompute = (num) => {
  if(num === undefined){
    return '0'
  } else {
    return Math.round(num.toFixed(0)/1000)
  }

}
