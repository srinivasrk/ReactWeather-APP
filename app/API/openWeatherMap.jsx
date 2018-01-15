var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=07d33c6aadec18df7d17712051da5a5d&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error("incorrect data" + res.data.message);
    });
    }
}
