var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=07d33c6aadec18df7d17712051da5a5d&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod !== 200){
        throw new Error(res.data.cod);
      } else{
        return res.data.main.temp;
      }
    },  res => {
            throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
    });
    }
}
