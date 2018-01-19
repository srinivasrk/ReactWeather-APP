var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
      });
    }, function(errorMessage){
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    })
  },

  render:function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Loading data ...</h3>
      } else if(temp && location){
        return <WeatherOutput temp = {temp} location = {location} ></WeatherOutput>;
      }
    }

    return(
      <div>
        <h1 className="text-center"> Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
