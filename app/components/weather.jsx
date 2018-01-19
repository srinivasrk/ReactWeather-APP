var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
      });
    }, function(e){

      that.setState({

        isLoading: false,
        errorMessage: e
      });
    })
  },

  render:function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Loading data ...</h3>
      } else if(temp && location){
        return <WeatherOutput temp = {temp} location = {location} ></WeatherOutput>;
      }
    }

    function renderError(){
      console.log(errorMessage);
      if(typeof errorMessage == 'string'){
        return(
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return(
      <div>
        <h1 className="text-center"> Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
