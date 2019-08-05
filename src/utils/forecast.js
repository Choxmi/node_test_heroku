const request = require('request')

const forecast = (location , callback) => {
    const url = 'https://api.darksky.net/forecast/ab03b3f688f0ffa29a3fe593f9e6964e/'+location.latitude+','+location.longitude

    request({ url, json: true }, (error, {body})=>{
        if(error){
            callback(undefined, 'Error occured')
        } else if(body.error) {
            callback(undefined, 'Location Not found')
        } else {
            callback(body.daily.data[0].summary + " Today high : "+body.daily.data[0].temperatureHigh+ " Today Low : "+body.daily.data[0].temperatureLow, undefined)
        }
    })
}

module.exports = forecast