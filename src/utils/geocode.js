const request = require('request')

const geocode = (address, callback) => {
    const key = 'pk.eyJ1Ijoic2V6ZWYiLCJhIjoiY2p5YnFuY3VzMGM2YzNjbGQ2cTFrMmh1aSJ9.TZ-dJis4DUnR5DOJaKYJLQ'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?limit=1&access_token='+key

    //request({ url: location_url, json: true }, (error, response)=>{
    //shorthand and destructured version
    request({ url, json: true }, (error, {body})=>{
        if(error){
           callback(undefined, 'Error occured')
        } else if(body.features.length === 0) {
            callback(undefined, 'LatLong Not found')
        } else {
            callback({
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            },undefined)            
        }
    })
}

module.exports = geocode